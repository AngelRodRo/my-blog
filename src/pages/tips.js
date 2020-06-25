import React from "react"
import { Router } from "@reach/router"

import Layout from "src/components/Layout/tips"

import Index from 'src/views/Tips'
import Create from 'src/views/Tips/create';

import PrivateRoute from "src/components/privateRoute"

export default function TipsPage() {
    return (
        <Layout>
            <Router>
                <Index
                    path="/tips/"
                />
                <PrivateRoute
                    path="/tips/create"
                    component={Create}
                />
            </Router>
        </Layout>
    )
}

TipsPage.displayName = "TipsPage"
