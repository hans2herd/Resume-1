import React from 'react'
import './cssresume.css'

export default class Chicken extends React.Component {
    render() {
        return (
            <div>
                <head>
                        <title>Title</title>
                        <link rel="stylesheet" type="css" href="two.css"/>
                </head>
                <body>
                <div className="container">

                    <img src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/13092021_10209473454781061_8632977655778141614_n.jpg?oh=3eb7d82f87e546535b3e0d352190f195&oe=5B04E691" id="pic" alt=""/>
                        <h1>Hansjurgen Herd</h1>
                        <h3>HTML | CSS | Java Script</h3>

                        <div className="boxes">
                            <h2 className={"h2"}>Education</h2>
                            <div>

                                <ul className={"text"}>
                                    <li>East Highschool</li>
                                    <li>Navy Bootcamp</li>
                                    <li>SLCC Tradeschool</li>
                                </ul>
                            </div>

                        </div>
                        <br/><br/>
                            <div className="boxes">
                                <h2 className={"h2"}>Employment</h2>
                                <div>

                                    <ul className={"text"}>
                                        <li>24 Hour Fitness</li>
                                        <li>U.S. Navy</li>
                                        <li>J.S. Electric</li>
                                    </ul>
                                </div>
                            </div>
                            <br/><br/>
                                <div className="boxes">
                                    <h2 className={"h2"}>Attributes</h2>
                                    <div>
                                        <ul className={"text"}>
                                            <li>Hard worker</li>
                                            <li>Fast learner</li>
                                            <li>Possitive Attitude</li>
                                        </ul>
                                    </div>
                                </div>
                    <br/><br/><br/><br/>
                                    <footer className="boxes">
                                        <h2>About me</h2>
                                    </footer>

                                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                </div>







                </body>
            </div>
        )
    }
}

