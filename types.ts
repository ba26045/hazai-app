export interface MaterialItem {
    id: string;
    title: string;
    category: 'wood' | 'fabric' | 'metal' | 'paper';
    price: number;
    size: string;
    imageUrl: string;
    story: string;
    sellerName: string;
}