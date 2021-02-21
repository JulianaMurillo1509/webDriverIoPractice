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

//checkoutBtn in address tab

get checkAdressBtn(){
    return $('//*[@id="center_column"]/form/p/button');
}

//shipping tab

get terms(){
    return $('//*[@id="cgv"]');
}

get checkShippingBtn(){
    return $('//*[@id="form"]/p/button');
}

get paymentBtn(){
    return $('//*[@id="HOOK_PAYMENT"]/div[1]/div/p/a');
}

get finalInfo(){
    return $('//*[@id="center_column"]/form/div/h3');
}
//login page
get signIn(){
    return $('//*[@id="header"]/div[2]/div/div/nav/div[1]/a');
}
get emailInput(){
    return $('//*[@id="email_create"]');
}
get createacctbtn(){
    return $('//*[@id="SubmitCreate"]');
}

//form fields


get title(){
    return $('//*[@id="id_gender2"]');
}

get firstName(){
    return $('//*[@id="customer_firstname"]');
}

get lastName(){
    return $('//*[@id="customer_lastname"]');
}

get password(){
    return $('//*[@id="passwd"]');
}

get address(){
    return $('//*[@id="address1"]');
}

get city(){
    return $('//*[@id="city"]');
}

get state(){
    return $('//*[@id="id_state"]');
}

get stateOption(){
    return $('//*[@id="id_state"]/option[11]');
}

get zip(){
    return $('//*[@id="postcode"]');
}

get homePhone(){
    return $('//*[@id="phone"]');
}

get registerBtn(){
    return $('//*[@id="submitAccount"]');
}



//browser
open(){
    super.open('http://automationpractice.com/index.php');
}

}

export default new LocatorsPage();