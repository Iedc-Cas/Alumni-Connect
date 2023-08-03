import connectToMongodb from "@/lib/mongodb/mongodb";
import ItemCard from "./components/item";
import Signup from "@/lib/models/mongo";

export const revalidate = 0;

export default async function AdminPage() {

    await connectToMongodb();
    const data = await Signup.find();

    return (
        <section className="min-h-screen bg-primary">
            <div className="text-white flex items-center pt-20 flex-col gap-5">
                {data.map((item) => (
                    <ItemCard name={item.username} email={item.emial} imgUrl={item.idproof} key={item.username} />
                ))}
            </div>
        </section>
    );
}
