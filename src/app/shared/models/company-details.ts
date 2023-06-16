export interface CompanyDetails {
  data: Data
  meta: Meta
}

export interface Data {
  id: number
  attributes: Attributes
}

export interface Attributes {
  name: string
  address: string
  email: string
  cellNumber: string
  facebook: string
  twitter: string
  linkedin: string
  youtube: any
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Meta { }
