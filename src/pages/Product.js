import React, { useEffect } from 'react'
import Helmet from '../components/Helmet'
import productData from '../assets/fake-data/products'
import Section, { SectionBody, SectionTitle } from '../components/Section';
import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';
import ProductView from '../components/ProductView';
import accessoryData from '../assets/fake-data/accessories';
function Product(props) {

    const product = productData.getProductBySlug(props.match.params.slug);
    const accessories = accessoryData.getAccessoryBySlug(props.match.params.slug);
    const data = product === undefined ? accessories : product;

    const relatedProducts = productData.getProducts(8);
    
    const relatedAccessories = accessoryData.getAccessories(8);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product])
    return (
        <Helmet title={data.title}>
            <Section>
                <SectionBody>
                    <ProductView product={data}/>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    Khám phá thêm
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {   
                            product !== undefined ?  relatedProducts.map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            )) : relatedAccessories.map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    // img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Product
