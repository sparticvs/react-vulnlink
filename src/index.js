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
        const type = this.props.type in Object.keys(BaseUrls) ? this.props.type : 'nvd';
        const child = this.props.children == undefined ? this.props.id : this.props.children;
        return (
            <a className="vuln-link" href={BaseUrls[type] + this.props.id}>{child}</a>
        );
    }
}
