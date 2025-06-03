import { CardProduct } from "../components/CardProduct";
import { useProducts } from "../hooks/products/useProduts";
import { useParams } from "react-router-dom";
import { useUsers } from "../hooks/users/useUsers";
import PleaseMakeLogin from "../components/PleaseMakeLogin";


export default function Home() {
  const { products } = useProducts();
  const { users } = useUsers();
  const { userId } = useParams()
  
  const validadeUser = users.find((user) => user.id === Number(userId));

  return (

    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      {validadeUser ? (
        <>
          <h3 className="text-lg font-semibold mb-4">Welcome, {validadeUser.name.firstname}!</h3>
          <p className="text-gray-700 mb-6">Explore our collection of products.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <CardProduct key={product.id} product={product} userId={Number(userId)} />
            ))}
          </div>
        </>
      ) : (<PleaseMakeLogin />)}
    </div>
  );
}