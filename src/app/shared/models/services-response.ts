export interface ServiceResponse {
  data: Data
}

export interface Data {
  id: number
  attributes: Attributes
}

export interface Attributes {
  title: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  services: Service[]
}

export interface Service {
  id: number
  title: string
  description: string
  image: Image
}

export interface Image {
  data: Data2
}

export interface Data2 {
  id: number
  attributes: Attributes2
}

export interface Attributes2 {
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats: any
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
}
