let amazonMobileObjProperty = {
    "asin": "B0DGJ8DP1M",
    "brand": "Apple",
    "productName": "iPhone 16 Plus 256 GB",
    "description": "5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods",
    "storage": "256 GB",
    "color": "White",
    "rating": 4.6,
    "ratingsCount": 826,
    "boughtInPastMonth": "100+",
    "price": 89900,
    "mrp": 99900,
    "discount": "10%",
    "emiAvailable": true,
    "delivery": {
        "type": "FREE",
        "estimatedDate": "19 - 21 Jun"
    },
    "image": {
        "url": "https://m.media-amazon.com/images/I/61Brhn4WBIL._AC_UY218_.jpg",
        "alt": "Apple iPhone 16 Plus 256 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods"
    },
    reviews: [
        {
            "reviewId": 1,
            "reviewViewedBYUserEmail": "ram@gmail.com",
            "reviewUserMobileNumber": null,
            "reviewDiscription": "Excellent product quality and fast delivery. Worth for money"
        },
        {
            "reviewId": 2,
            "reviewViewedBYUserEmail": "sita123@gmail.com",
            "reviewUserMobileNumber": "9876543210",
            "reviewDiscription": "Good packaging and decent quality. Delivery was on time"
        },
        {
            "reviewId": 3,
            "reviewViewedBYUserEmail": "john.doe@gmail.com",
            "reviewUserMobileNumber": null,
            "reviewDiscription": "Average experience. Product is okay but could be better"
        },
        {
            "reviewId": 4,
            "reviewViewedBYUserEmail": "kiran.reddy@gmail.com",
            "reviewUserMobileNumber": "9123456780",
            "reviewDiscription": "Very satisfied with the purchase. Highly recommended"
        },
        {
            "reviewId": 5,
            "reviewViewedBYUserEmail": "megha.p@gmail.com",
            "reviewUserMobileNumber": null,
            "reviewDiscription": "Not happy with the product. Quality is below expectations"
        }
    ],
    "availableColors": [
        "White",
        "Black",
        "Teal"
    ],
    "productUrl": "/iPhone-16-Plus-256-GB/dp/B0DGJ8DP1M",
    "currency": "INR"
}

let ShallowCopyofObject = amazonMobileObjProperty; //shallow copy
ShallowCopyofObject.brand = "SAMSUNG";

console.log(amazonMobileObjProperty);
console.log(ShallowCopyofObject);