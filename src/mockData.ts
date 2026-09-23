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

export const mockItems: MaterialItem[] = [
    {
        id: '1',
        title: 'ウォールナット無垢材 端材セット',
        category: 'wood',
        price: 1500,
        size: '厚さ20mm × 約30cm 5本',
        imageUrl: 'https://picsum.photos/400/300?random=1',
        story: 'オーダー家具を製作した際に出た上質な端材です。コースターや小物DIYにぴったりです。',
        sellerName: '木工工房ハザキ',
    },
    {
        id: '2',
        title: 'ヴィンテージ風デニム生地 はぎれ',
        category: 'fabric',
        price: 800,
        size: '幅50cm × 長さ1m',
        imageUrl: 'https://picsum.photos/400/300?random=2',
        story: 'アパレルサンプル制作時の余り生地です。パッチワークやポーチ作りにどうぞ。',
        sellerName: 'クラフトスタジオ',
    },
    {
        id: '3',
        title: '真鍮（ブラス）板 端材',
        category: 'metal',
        price: 2200,
        size: '100mm × 100mm 厚さ1mm',
        imageUrl: 'https://picsum.photos/400/300?random=3',
        story: 'アクセサリー試作で残った真鍮板です。叩いて風合いを出せる人気の素材です。',
        sellerName: 'メタルラボ',
    },
];