export type Category = CategoryInterface[];

export interface CategoryInterface {
    name: string;
    list: ListItem[];
}

export interface ListItem {
    status: boolean;
    value: string;
}

export interface CategoryListItemWithIndex {
    itemIndex: number;
    item: ListItem[];
}