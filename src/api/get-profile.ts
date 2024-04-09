import { api } from "@/lib/axios";

interface GetProfileResponse{
  id: string,
  name: string,
  email: string,
  phone: string,
  role: 'manager' | 'customer',
  createAt: Date | null,
  uodateAt: Date | null
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me')

  return response.data
}