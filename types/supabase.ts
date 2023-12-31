export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      owners: {
        Row: {
          id: number
          name: string
          year: number | null
        }
        Insert: {
          id?: number
          name: string
          year?: number | null
        }
        Update: {
          id?: number
          name?: string
          year?: number | null
        }
        Relationships: []
      }
      teams: {
        Row: {
          id: number
          image_url: string | null
          location: string | null
          name: string | null
          sport: string
        }
        Insert: {
          id?: number
          image_url?: string | null
          location?: string | null
          name?: string | null
          sport?: string
        }
        Update: {
          id?: number
          image_url?: string | null
          location?: string | null
          name?: string | null
          sport?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
