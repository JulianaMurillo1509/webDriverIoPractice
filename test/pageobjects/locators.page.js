import Page from './page';

class LocatorsPage extends Page {

    //  to search products
get searchInput(){
    return $('//*[@id="search_query_top"]');
}

get searchBtn(){
    return $('//*[@id="searchbox"]/button');
}

//to order the list of products
get sortBy(){
    return $('//*[@id="selectProductSort"]');
}

get sortByOption(){
    return $('//*[@id="selectProductSort"]/option[2]');
}

//to validate the lowest price
get price(){
    return $('//*[@id="center_column"]/ul/li[1]/div/div[2]/div[1]/span');
}

// btn to add the product to the shopping cart 
get addtoCartBtn(){
    return $('//*[@id="center_column"]/ul/li[1]/div/div[2]/div[2]/a[1]');
}

//banner to porceed to checkout
get banner(){
    return $('//*[@id="layer_cart"]/div[1]');
}

// checkout button in banner
get checkoutBtn(){
    return $('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a');
}

//checkoutButton in order page 
get checkBtn(){
    return $('//*[@id="center_column"]/p[2]/a[1]');
}

//form fields

open(){
    super.open('http://automationpractice.com/index.php');
}

}

export default new LocatorsPage();