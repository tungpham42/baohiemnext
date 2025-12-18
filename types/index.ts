export interface Term {
  id: string;
  term: string;
  definition: string;
  category:
    | "General"
    | "Health"
    | "Car"
    | "Life"
    | "Travel"
    | "Property"
    | "Marine";
}

export interface ClaimStep {
  title: string;
  description: string;
  icon?: string; // Tên icon để map sau
}

export interface Hospital {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  type: "Public" | "Private" | "International";
}

export interface InsuranceCompany {
  id: string;
  name: string;
  type: "Life" | "Non-Life"; // Nhân thọ | Phi nhân thọ
  phone: string;
  website: string;
  logo?: string; // (Optional) Link logo
  workingHours: string;
  headquarters: string; // Trụ sở chính (Thành phố/Tòa nhà)
  charterCapital: string; // Vốn điều lệ (Ví dụ: "22.220 tỷ đồng")
}
