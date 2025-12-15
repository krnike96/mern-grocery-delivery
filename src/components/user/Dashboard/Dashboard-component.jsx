import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";
import {
  DashboardContainer,
  Title,
  ProductGrid,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  SubscriptionSection,
  SubscriptionLabel,
  Checkbox,
  AddToCartButton,
} from "./Dashboard-style";

// Placeholder Product Data
const mockProducts = [
  {
    id: 1,
    name: "Fresh Apples",
    price: 15.99,
    unit: "per kg",
    imageUrl: "https://via.placeholder.com/300x180/ffead6/fc8019?text=Apples",
  },
  {
    id: 2,
    name: "Organic Milk",
    price: 5.5,
    unit: "per liter",
    imageUrl: "https://via.placeholder.com/300x180/ffead6/fc8019?text=Milk",
  },
  {
    id: 3,
    name: "Broccoli Florets",
    price: 9.25,
    unit: "per bag",
    imageUrl: "https://via.placeholder.com/300x180/ffead6/fc8019?text=Broccoli",
  },
  {
    id: 4,
    name: "Atta (Wheat Flour)",
    price: 30.0,
    unit: "per 5kg",
    imageUrl: "https://via.placeholder.com/300x180/ffead6/fc8019?text=Atta",
  },
];

const UserDashboard = () => {
  // State to track subscription selection per product
  const [subscriptions, setSubscriptions] = useState({});

  const handleSubscriptionChange = (productId, type) => {
    setSubscriptions((prev) => ({
      ...prev,
      [productId]: prev[productId] === type ? null : type, // Toggle selection
    }));
  };

  const handleAddToCart = (product) => {
    const subType = subscriptions[product.id];

    const itemDetails = {
      productId: product.id,
      name: product.name,
      price: product.price,
      subscriptionType: subType, // null, 'weekly', or 'monthly'
    };

    console.log("Adding to cart:", itemDetails);
    toast.success(
      `${product.name} added to cart! ${
        subType ? "(" + subType.toUpperCase() + " Sub)" : "(One-time)"
      }`
    );

    // Future: Update global Cart State
  };

  return (
    <DashboardContainer>
      <Title>Today's Groceries</Title>

      <ProductGrid>
        {mockProducts.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.imageUrl} alt={product.name} />

            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>
                ${product.price.toFixed(2)} <span>/ {product.unit}</span>
              </ProductPrice>
            </ProductInfo>

            <SubscriptionSection>
              <h4>Subscription Options:</h4>

              {/* Weekly Subscription Toggle */}
              <SubscriptionLabel
                onClick={() => handleSubscriptionChange(product.id, "weekly")}
                $active={subscriptions[product.id] === "weekly"}
              >
                Weekly Delivery
                <Checkbox
                  type="radio"
                  name={`sub_${product.id}`}
                  checked={subscriptions[product.id] === "weekly"}
                  readOnly
                />
              </SubscriptionLabel>

              {/* Monthly Subscription Toggle */}
              <SubscriptionLabel
                onClick={() => handleSubscriptionChange(product.id, "monthly")}
                $active={subscriptions[product.id] === "monthly"}
              >
                Monthly Delivery (5% Off)
                <Checkbox
                  type="radio"
                  name={`sub_${product.id}`}
                  checked={subscriptions[product.id] === "monthly"}
                  readOnly
                />
              </SubscriptionLabel>

              {/* One-Time Purchase Button */}
              <AddToCartButton onClick={() => handleAddToCart(product)}>
                <ShoppingCart size={18} style={{ marginRight: "8px" }} />
                {subscriptions[product.id]
                  ? "Add Subscription"
                  : "Buy One-Time"}
              </AddToCartButton>
            </SubscriptionSection>
          </ProductCard>
        ))}
      </ProductGrid>
    </DashboardContainer>
  );
};

export default UserDashboard;
