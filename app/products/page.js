import { Layers3, Shirt, Tags } from "../../components/Icons";
import PageHero from "../../components/PageHero";
import ContactCard from "../../components/ContactCard";
import { garmentCategories, stockServices } from "../../data/site";

export const metadata = { title: "Products & Sourcing" };

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="PRODUCTS & SOURCING"
        title="Ready stock, wholesale and fresh order categories."
        text="A flexible sourcing portfolio spanning stock lots and direct/fresh order garment programmes across woven, non-woven, denim and synthetic clothing."
      />

      <section className="section">
        <div className="container">
          <div className="section-heading-row">
            <div><div className="eyebrow">READY STOCK</div><h2 className="section-title">Available sourcing formats.</h2></div>
          </div>
          <div className="icon-grid three-col">
            {stockServices.map((item, index) => {
              const Icon = index % 3 === 0 ? Layers3 : index % 3 === 1 ? Tags : Shirt;
              return <div className="card icon-card" key={item}><Icon /><h3>{item}</h3><p>Commercial sourcing based on current product availability.</p></div>;
            })}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <div className="eyebrow">FRESH / DIRECT ORDER</div>
              <h2 className="section-title">Practical starting FOB ranges for Bangladesh.</h2>
              <p className="muted-copy">The following ranges are presented in the company profile as practical starting points for garment-buyer costing.</p>
            </div>
          </div>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Garment Category</th><th>FOB / PC</th></tr></thead>
              <tbody>
                {garmentCategories.map(([name, price]) => <tr key={name}><td>{name}</td><td>{price}</td></tr>)}
              </tbody>
            </table>
          </div>
          <p className="fine-print">Final costing depends on the buyer brief, material, construction, trims, compliance, order quantity and production arrangement.</p>
        </div>
      </section>

      <section className="section">
        <div className="container"><ContactCard /></div>
      </section>
    </>
  );
}
