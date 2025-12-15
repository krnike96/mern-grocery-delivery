import styled from "styled-components";

export const DashboardContainer = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--color-text-dark);
  margin-bottom: 25px;
  border-bottom: 3px solid var(--color-primary);
  display: inline-block;
  padding-bottom: 5px;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 20px;
`;

export const ProductCard = styled.div`
  background: var(--color-white);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-light);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-medium);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  background-color: var(--color-background);
`;

export const ProductInfo = styled.div`
  padding: 15px;
  flex-grow: 1; /* Ensures content pushes the subscription section to the bottom */
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: 10px;

  span {
    font-size: 0.9rem;
    font-weight: 400;
    color: var(--color-text-light);
    margin-left: 5px;
  }
`;

export const SubscriptionSection = styled.div`
  border-top: 1px solid #eee;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SubscriptionLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-color: ${(props) => (props.$active ? "#fff7f2" : "transparent")};
  border: 2px solid
    ${(props) => (props.$active ? "var(--color-primary)" : "#ddd")};
  border-radius: var(--border-radius);
  padding: 10px;
  font-weight: 600;
  transition: background-color 0.2s, border-color 0.2s;
`;

export const Checkbox = styled.input`
  /* Custom checkbox styling */
  width: 18px;
  height: 18px;
  margin-left: 10px;
  appearance: none;
  border: 2px solid var(--color-primary);
  border-radius: 4px;
  transition: background-color 0.2s;

  &:checked {
    background-color: var(--color-primary);
  }
`;

export const AddToCartButton = styled.button`
  padding: 10px;
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-weight: 700;
  margin-top: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;
