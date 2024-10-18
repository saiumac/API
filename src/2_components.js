////////////////////////////////// COMPONENTS //////////////////////////

// component -- combination of (html, css, javascript)
// 1-- Functional components
// 2-- Class components


          import React from "react"
          import "./index.css"

        //   import ReactDOM from "react-dom/client"

        //   Functional Components

          export function Calling(){
            let menus = ['hemanth','harini','imran']
            return (<ul id="list_1" className="listClass">
              <li>{menus[0]}</li>
              <li>{menus[1]}</li>
              <li>{menus[2]}</li>
            </ul>
          )}

          export  function Names(){
            return (<>
                    <h1>Harini</h1>
                    <h2>Hemanth</h2>
                    <h2>Imran</h2>
                    <h2>Bhavani</h2>
                    </>
            )
          }

          export function Nothing(){
            return (<><label htmlFor="sub">Subscribe :</label><input type="checkbox" id="sub"/></>)
          }

        //   Class Components
        //   extends React.Component -- is used to import the React components into this class.

        export  class NamesC extends React.Component {
            render() {
              let obj = {name : ['Hemanth','Harini','Imran'], age:[21,19,21]}
              return (
                <>
                <span>{obj.name[0]}</span>:<span>{obj.age[0]} <br></br></span> 
                <span>{obj.name[1]}</span>:<span>{obj.age[1]}  <br></br></span>
                <span>{obj.name[2]}</span>:<span>{obj.age[2]}  <br></br></span>
                </>
              )
            }
          }


          export function Des(){
            return (<>
            {
            sum(4,5)
            }
            </>)
          }
          function sum(n1,n2){
            return n1 +n2
          }

          ////////////////// SYNTAX ///////////////

        //   function Names(){
        //     return ()
        //   }
          
        //   class Names extends React.Component {
        //     render() {
        //       return ()
        //     }
        //   }