const datas = [{
    ProductType:"men clothes",
    ProductName:"a",
    ProductPrice:1,
    ProductPicture:"",
    get ProductUrl(){
        return (this.ProductType+"/"+this.ProductName);
    }
    
}]
export {datas}