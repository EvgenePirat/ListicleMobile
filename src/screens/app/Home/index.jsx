import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import {categories} from '../../../data/categories';
import {products} from '../../../data/products';
import CategoryBox from '../../../components/CategoryBox';
import ProductHomeItem from '../../../components/ProductHomeItem';

const Home = ({navigation}) => {

    const [selectedCategory, setSelectedCategory] = useState();
    const [keyword, setKeyword] = useState();
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        if(selectedCategory && !keyword){
            const updatedProducts = products.filter((product) => product.category === selectedCategory);
            setFilteredProducts(updatedProducts);
        }
        else if(selectedCategory && keyword){
            const updatedProducts = products.filter((product) => product.category === selectedCategory && product.title.toLowerCase().includes(keyword.toLowerCase()));
            setFilteredProducts(updatedProducts);
        }
        else if(!selectedCategory && keyword){
            const updatedProducts = products.filter((product) => product.title.toLowerCase().includes(keyword.toLowerCase()));
            setFilteredProducts(updatedProducts);
        }
        else{
            setFilteredProducts(products);
        }

    }, [selectedCategory, keyword])

    const renderCategoryItem = ({ item}) => {
        return (
            <CategoryBox title={item?.title} onPress={() => setSelectedCategory(item?.id)} image={item?.image} isSelected={item?.id === selectedCategory } />
        )
    }

    const renderProductItem = ({ item}) => {
        const onProductPress = (product) => {
            navigation.navigate('ProductDetails', { product });
        }
        return (
            <ProductHomeItem onPress={() => onProductPress(item)} title={item?.title} price={item.price} image={item?.image} />
        )
    }

    return (
        <SafeAreaView>
            <Header showSearch={true} keyword={keyword} onSearch={setKeyword} title='Find All You Need' />

            <FlatList showsHorizontalScrollIndicator={false} style={styles.list} horizontal data={categories} renderItem={renderCategoryItem} keyExtractor={(item, index) => String(index)} />

            <FlatList 
                numColumns={2} 
                showsHorizontalScrollIndicator={false} 
                style={styles.productList} 
                data={filteredProducts} 
                renderItem={renderProductItem} 
                keyExtractor={(item) => String(item.id)} 
                ListFooterComponent={<View style={{height: 200}} />}
            />
        </SafeAreaView>
    )
}
 
export default React.memo(Home);