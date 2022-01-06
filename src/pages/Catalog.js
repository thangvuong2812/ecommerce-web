import React, { useState, useRef, useCallback, useEffect } from 'react'
import categories from '../assets/fake-data/categories'
import colors from '../assets/fake-data/product-color'
import sizes from '../assets/fake-data/product-size'
import productData from '../assets/fake-data/products'
import Button from '../components/Button'
import CheckBox from '../components/CheckBox'

import Helmet from '../components/Helmet'
import InfinityList from '../components/InfinityList'
import { useFadeModal } from '../customHook/useFadeModal'

function Catalog(props) {

    const initFilter = {
        categories: [],
        colors: [],
        sizes: []
    }
    let productList = productData.getAllProducts();

    const [filter, setFilter] = useState(initFilter);

    const [products, setProducts] = useState(productList);

    const filterSeclect = (type, checked, item) => {
        // Input duoc check
        if (checked) {
            // Kiem tra loai cua input duoc check
            switch (type) {
                case 'CATEGORIES':
                    setFilter({ ...filter, categories: [...filter.categories, item.categorySlug] });
                    break;
                case 'COLORS':
                    setFilter({ ...filter, colors: [...filter.colors, item.color] });
                    break;
                case 'SIZES':
                    setFilter({ ...filter, sizes: [...filter.sizes, item.size] });
                    break;
                default:
            }
            // Neu khong duoc check
        } else {
            switch (type) {
                case 'CATEGORIES':
                    const newCategories = filter.categories.filter(category => category !== item.categorySlug);
                    setFilter({ ...filter, categories: newCategories });
                    break;
                case 'COLORS':
                    const newColors = filter.colors.filter(color => color !== item.color);
                    setFilter({ ...filter, colors: newColors });
                    break;
                case 'SIZES':
                    const newSizes = filter.sizes.filter(size => size !== item.size);
                    setFilter({ ...filter, sizes: newSizes });
                    break;
                default:
            }
        }
    }

    const clearFilter = () => {
        setFilter(initFilter);
    }

    const updateProducts = useCallback(
        () => {
            let temp = productList;

            if (filter.categories.length > 0) {
                temp = temp.filter(e => {
                    return filter.categories.includes(e.categorySlug);
                });
            }

            if (filter.colors.length > 0) {
                temp = temp.filter(e => {
                    const check = e.colors.find(color => {
                        return filter.colors.includes(color);
                    });
                    return check !== undefined
                })
            }

            if (filter.sizes.length > 0) {
                temp = temp.filter(e => {
                    const check = e.size.find(size => {
                        return filter.sizes.includes(size);
                    });
                    return check !== undefined
                })
            }

            setProducts(temp);
        },
        [filter, productList]
    )

    useEffect(() => {
        updateProducts();

    }, [updateProducts])

    const { filterRef, showHideFilter } = useFadeModal();

    return (
        <Helmet title="Sản phẩm">
            <div className="catalog">
                <div className="catalog__filter" ref={filterRef}>
                    <div className="catalog__filter__close" onClick={() => showHideFilter()}>
                        <i className="bx bx-left-arrow-alt"></i>
                    </div>
                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Danh mục sản phẩm
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                categories.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.display}
                                            onChange={(input) => filterSeclect("CATEGORIES", input.checked, item)}
                                            checked={filter.categories.includes(item.categorySlug)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Màu sắc
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                colors.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            color={item.color}
                                            type="color"
                                            label={item.display}
                                            onChange={(input) => filterSeclect("COLORS", input.checked, item)}
                                            checked={filter.colors.includes(item.color)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Kích cỡ
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                sizes.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.display}
                                            onChange={(input) => filterSeclect("SIZES", input.checked, item)}
                                            checked={filter.sizes.includes(item.size)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__content">
                            <Button size="sm" onClick={clearFilter}>Xóa bộ lọc</Button>
                        </div>
                    </div>

                </div>
                <div className="catalog__filter__toggle">
                    <Button size="sm" onClick={() => showHideFilter()}>Bộ lọc</Button>
                </div>
                <div className="catalog__content">
                    <InfinityList data={products} />
                </div>
            </div>
        </Helmet>
    )
}

export default Catalog
