export function requestvalues(){
    const inpvals : string[] = [];
    inpvals[0]="TRV";                                   //Origin Airport
    inpvals[1]="BOM";                                   //Destination airport
    inpvals[2]="01Aug";                                 //Departure Date
    inpvals[3]="Bombay";                                //destination place for hotel
    inpvals[4]="Bombay BeachCA, USA";                   //destination place autofill data
    inpvals[5]="01Aug";                                 //Checkin
    inpvals[6]="02Aug";                                 //Checkout
    inpvals[7]="Ajay Shankar";                          //Traveller Name
    return(inpvals)
}

export function flightquotevalues(){
    const inpvals : string[] = [];
    inpvals[0]="6E/5301/01AUG2022";                      //Flight Code
    inpvals[1]="5000";                                   //Fare
    return(inpvals)
}

export function hotelquotevalues(){
    const inpvals : string[] = [];
    inpvals[0]="mumbai hotel";                                                                                  //Hotel Name
    inpvals[1]="Hotel Sahara StarNehru Road, opp. Domestic Airport, Navpada, Vile Parle East, Vi";              //Hotel Autofill data
    inpvals[2]="5000";                                                                                          //Hotel Fare
    return(inpvals)
}