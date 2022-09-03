class Uber{
    constructor(vehicle_no,otp,driver_name,kms_of_ride,rate){
    this.vehicle_no = vehicle_no;
    this. otp = otp;
    this.driver_name = driver_name;
    this.kms_of_ride = kms_of_ride;
    this.rate = rate;
    }

getRate() {
    return `The total amount is: ₹${this.rate}`;
    }
price(amount) {
    this.rate = this.kms_of_ride * 20
    return this.getRate();
    }
}
var obj = new Uber("TN07AX7777","3456","SATHISH","20","420")
console.log(obj.getRate());

// To calculate uber price
const TN07AX8888 = new Uber("TN07AX8888","5678","SURESH","150");
console.log(TN07AX8888.price());
