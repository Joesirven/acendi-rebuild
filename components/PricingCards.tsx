import { CheckIcon } from "lucide-react";
import Link from "next/link";
import CheckoutButton from "./CheckoutButton";

const tiers = [
    {
        name: "Starter",
        id: null,
        href: "#",
        priceMonthly: "$0.00",
        description: "get chating right away",
        features: [
            "2 users",
            "Unlimited messages",
            "5 translations",
            "2 languages",
        ],
    },
    {
        name: "Monthly",
        id: "monthly", //stripe id, can you pulled dynamically from stripe
        href: "#",
        priceMonthly: "$11.11",
        description: "unlimited everything",
        features: [
            "Unlimited users",
            "Unlimited messages",
            "Unlimited translations",
            "Unlimited languages",
        ],
    },
    {
        name: "Yearly",
        id: "yearly", //stripe id, can you pulled dynamically from stripe
        href: "#",
        priceMonthly: "$111.11",
        description: "unlimited everything",
        features: [
            "Unlimited users",
            "Unlimited messages",
            "Unlimited translations",
            "Unlimited languages",
        ],
    },
    {
        name: "Lifetime",
        id: "lifetime", //stripe id, can you pulled dynamically from stripe
        href: "#",
        priceMonthly: "$1111.11",
        description: "unlimited everything",
        features: [
            "Unlimited users",
            "Unlimited messages",
            "Unlimited translations",
            "Unlimited languages",
        ],
    },
];



function PricingCards({ redirect }: { redirect: boolean }) {
  return (
  <div>
        <div className="mx-auto grid max-w-md grid-col-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
            {tiers.map((tier) => (
                <div
                    key={tier.id}
                    className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl
                    ring-1 ring-gray-900/10 sm:p-10"
                    >
                    <div>
                        <h3 id={tier.id + tier.name}
                            className="text-base font-semibold leading-7 text-indigo-600"
                        >
                            {tier.name}
                        </h3>
                        <div className="mt-4 flex items-baseline gap-x-2">
                            {tier.priceMonthly ? (
                                <>
                                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                                        {tier.priceMonthly}
                                    </span>
                                    <span className="text-base font-semibold leading-7 text-gray-600">
                                        /month
                                    </span>
                                </>

                            ): (
                                <span className="text-5xl font-bold tracking-tight text-gray-900">
                                    Free
                                </span>
                            )}
                        </div>
                        <p className="mt-6 text-base leading-7 text-gray-500">
                            {tier.description}
                        </p>
                        <ul
                            role="list"
                            className="mt-10 space-y-4 text-sm leading-6 text-gray-600"
                        >
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon
                                        className="h-6 w-5 flex-none text-indigo-600"
                                        aria-hidden="true"
                                    />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {redirect ? (
                        <Link href='/register' className="mt-8 rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold
                        leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
                        focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer
                        disabled:opacity-80">
                            Get Started today
                        </Link>
                    ) : (
                        tier.id && <CheckoutButton />
                    )}

                </div>
            ))}
        </div>
    </div>);
};

export default PricingCards
