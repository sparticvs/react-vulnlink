/**
 * Copyright (c) 2019 - Charles `sparticvs` Timko
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const BaseUrls = {
    'nvd': {
        'url': 'https://nvd.nist.gov/vuln/detail/',
        'fmt': /CVE-[\d]{4}-[\d]{4,}/i
    },
    'mitre': {
        'url': 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=',
        'fmt': /CVE-[\d]{4}-[\d]{4,}/i
    },
    'redhat': {
        'url': 'https://access.redhat.com/errata/',
        'fmt': /RHSA-[\d]{4}:[\d]{4}/i
    }
};

export default class VulnLink extends Component {
    render() {
        const src = this.props.src in BaseUrls ? this.props.src : 'nvd';
        const child = this.props.children == undefined ? this.props.id : this.props.children;
        const baseUrl = BaseUrls[src].url;

        if(this.props.id.match(BaseUrls[src].fmt) === null) {
            return null;
        }

        return (
            <a className="vuln-link" href={baseUrl + this.props.id}>{child}</a>
        );
    }
}
