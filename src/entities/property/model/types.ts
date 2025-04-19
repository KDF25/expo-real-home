export interface IProperty {
    name: string;
    type: string;
    description: string;
    address: string;
    geolocation: string;
    price: number;
    area: number;
    bedrooms: number;
    bathrooms: number;
    rating: number;
    facilities: string[]; 
    image: string; 
    agent: IAgent; 
    gallery: IGallery[]; 
    reviews: IReview[]; 
  };

  export interface IAgent  {
    $id: string;
    name: string;
    email: string;
    avatar: string;
  };
  
  export interface IReview  {
    $id: string;
    name: string;
    avatar: string;
    review: string;
    rating: number;
    $createdAt: string;
  };
  
  export interface IGallery  {
    $id: string;
    image: string;
  };