import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import JSONData from "../../content/colors.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Colors" />
    <div className="container">
      {/* <h1>{JSONData.title}</h1> */}
      {JSONData.colors.map((data, index) => {

        let rows = []
        for(let i=0; i<5; i++){
          rows.push(
            <code
              className="col text-white py-4 mb-4 mx-2"
              key={`color_${index}`}
              style={{ background: `${data.item[i]}`}}
            >
              {data.item[i]}
            </code>
          )
        }
        return (
          <div className="row">
            <div className="col-12">
              <h3
                key={`name_${index}`}
                className="text-capitalize text-dark"
              >
                {data.name}
              </h3>
            </div>
            {rows}
          </div>
        )
      })}
    </div>
  </Layout>
)

export default IndexPage
