/**
 * Copyright (c) 2019 - Charles `sparticvs` Timko
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const BaseUrls = {
    'nvd': 'https://nvd.nist.gov/vuln/detail/',
    'mitre': 'http://cve.mitre.org/cgi-bin/cvename.cgi?name='
};

export default class VulnLink extends Component {
    render() {
        const src = this.props.src in BaseUrls ? this.props.src : 'nvd';
        const child = this.props.children == undefined ? this.props.id : this.props.children;
        return (
            <a className="vuln-link" href={BaseUrls[src] + this.props.id}>{child}</a>
        );
    }
}
