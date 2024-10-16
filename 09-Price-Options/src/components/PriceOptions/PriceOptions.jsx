import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "option_name": "Basic Plan",
            "price": 29.99,
            "currency": "USD",
            "duration": "Monthly",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Open gym hours only",
                "1 guest pass per month"
            ]
        },
        {
            "id": 2,
            "option_name": "Standard Plan",
            "price": 49.99,
            "currency": "USD",
            "duration": "Monthly",
            "features": [
                "Access to gym equipment",
                "Locker room and sauna access",
                "Group fitness classes",
                "5 guest passes per month",
                "Free Wi-Fi"
            ]
        },
        {
            "id": 3,
            "option_name": "Premium Plan",
            "price": 79.99,
            "currency": "USD",
            "duration": "Monthly",
            "features": [
                "Access to gym equipment and personal trainers",
                "Locker room, sauna, and steam room access",
                "Unlimited group fitness classes",
                "10 guest passes per month",
                "Priority customer support",
                "Free Wi-Fi and towel service"
            ]
        },
        {
            "id": 4,
            "option_name": "Annual VIP Plan",
            "price": 799.99,
            "currency": "USD",
            "duration": "Yearly",
            "features": [
                "24/7 gym access",
                "Personalized fitness plan",
                "Unlimited guest passes",
                "Access to exclusive VIP events",
                "Priority booking for classes and trainers",
                "Complimentary drinks and snacks"
            ]
        }
    ];
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.key} option={option}></PriceOption> )
            }
            </div>
        </div>
    );
};

export default PriceOptions;