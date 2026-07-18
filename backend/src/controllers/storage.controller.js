import asyncHandler from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import Storage from '../models/Storage.model.js';
import Inventory from '../models/Inventory.model.js';

// ─── GET all storage locations ────────────────────────────────────────────────
export const getAllStorage = asyncHandler(async (req, res) => {
  const storages = await Storage.find().sort({ storageNumber: 1 });
  return res.status(200).json(new ApiResponse(200, 'Storage locations fetched', storages));
});

// ─── GET single storage ───────────────────────────────────────────────────────
export const getStorageById = asyncHandler(async (req, res) => {
  const storage = await Storage.findById(req.params.id);
  if (!storage) throw new ApiError(404, 'Storage not found');

  // Also fetch items in this storage
  const items = await Inventory.find({ storageId: storage._id });
  return res.status(200).json(new ApiResponse(200, 'Storage fetched', { storage, items }));
});

// ─── CREATE storage (inventory_manager) ──────────────────────────────────────
export const createStorage = asyncHandler(async (req, res) => {
  const { storageNumber, name } = req.body;
  if (!storageNumber) throw new ApiError(400, 'storageNumber is required');

  const existing = await Storage.findOne({ storageNumber: Number(storageNumber) });
  if (existing) throw new ApiError(409, 'Storage with this number already exists');

  const storage = await Storage.create({ storageNumber: Number(storageNumber), name });
  return res.status(201).json(new ApiResponse(201, 'Storage created', storage));
});

// ─── UPDATE storage (inventory_manager) ──────────────────────────────────────
export const updateStorage = asyncHandler(async (req, res) => {
  const storage = await Storage.findById(req.params.id);
  if (!storage) throw new ApiError(404, 'Storage not found');

  const { storageNumber, name } = req.body;

  if (storageNumber != null) {
    const duplicate = await Storage.findOne({ storageNumber: Number(storageNumber), _id: { $ne: storage._id } });
    if (duplicate) throw new ApiError(409, 'Storage number already in use');
    storage.storageNumber = Number(storageNumber);
  }

  if (name !== undefined) storage.name = name;

  await storage.save();
  return res.status(200).json(new ApiResponse(200, 'Storage updated', storage));
});

// ─── DELETE storage (inventory_manager) ──────────────────────────────────────
export const deleteStorage = asyncHandler(async (req, res) => {
  const storage = await Storage.findById(req.params.id);
  if (!storage) throw new ApiError(404, 'Storage not found');

  // Unlink items from this storage
  await Inventory.updateMany({ storageId: storage._id }, { $unset: { storageId: '' } });

  await storage.deleteOne();
  return res.status(200).json(new ApiResponse(200, 'Storage deleted', null));
});
