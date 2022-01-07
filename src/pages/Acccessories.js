import React, { useCallback, useEffect, useRef, useState } from 'react'
import accessoryData from '../assets/fake-data/accessories';
import categoryAccess from '../assets/fake-data/category-access';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';

import Helmet from '../components/Helmet';
import InfinityList from '../components/InfinityList';
import { useFadeModal } from '../customHook/customhook';

const Acccessories = () => {
    
    const [categories, setCategories] = useState([]);
    const accessoriesList = accessoryData.getAllAccessory();
    const [accessories, setAccessories] = useState(accessoriesList);

    const filterSeclect = (checked, item) => {
        if(checked) {
            setCategories([...categories, item.categorySlug])
        } else {
            const newCategories = categories.filter(e => e  !== item.categorySlug);
            setCategories(newCategories);
        }
    }
    const updateAccessories = useCallback(() => {
        let temp = accessoriesList;

        if( categories.length > 0 ) {
            temp = temp.filter(e => categories.includes(e.categorySlug));
        }
        setAccessories(temp);
    }, [accessoriesList, categories]);
    useEffect(() => {
        updateAccessories();
    }, [updateAccessories])
    const clearFilter = () => {
        setCategories([]);
    }
    const { filterRef, showHideFilter} = useFadeModal();
    return (
        <Helmet title="Phụ kiện">
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
                                categoryAccess.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.display}
                                            onChange={(input) => filterSeclect(input.checked, item)}
                                            checked={categories.includes(item.categorySlug)}
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
                    <InfinityList data={accessories} />
                </div>
            </div>
        </Helmet>
    )
}

export default Acccessories
