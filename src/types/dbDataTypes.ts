export interface categoryType {
    cat_id: string;
    cat_name: string;
    cat_description: string;
    isAchive: boolean;
    created_Date: number;
}

export interface subCategoryType {
    sub_cat_id: string;
    cat_id: string;
    sub_cat_name: string;
    sub_cat_description: string;
    isAchive: boolean;
    created_Date: number;
}

export interface brandType {
    brand_id: string;
    cat_id: string;
    sub_cat_id: string;
    brand_name: string;
    brand_description: string;
    brand_logo_url: string;
    isAchive: boolean;
    created_Date: number;
}

export interface dealType {
    deal_id: string;
    brand_id: string;
    cat_id: string;
    sub_cat_id: string;
    deal_description: string;
    deal_name: string;
    deal_image_url: string,
    deal_image_url_1?: string,
    deal_image_url_2?: string,
    deal_image_url_3?: string,
    deal_image_url_4?: string,
    isAchive: boolean;
    created_Date: number;
}