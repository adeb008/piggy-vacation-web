import type { ApiEnvelope, ConfirmResponse, ShareDetail } from './types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1';

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
  });

  const json = (await response.json()) as ApiEnvelope<T> | { message?: string };

  if (!response.ok) {
    const message = 'message' in json && json.message ? json.message : '请求失败';
    throw new Error(message);
  }

  if (!('data' in json)) {
    throw new Error('接口返回格式不正确');
  }

  return json.data;
}

export function getShareDetail(token: string) {
  return request<ShareDetail>(`/public/trip-shares/${token}`);
}

export function confirmShare(token: string, payload: { name: string; remark?: string }) {
  return request<ConfirmResponse>(`/public/trip-shares/${token}/confirm`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
