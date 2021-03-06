import VulnLink from './'
import React from 'react'
import TestRenderer from 'react-test-renderer'

const TEST_CVE = "CVE-2018-16598";
const TEST_RHSA = "RHSA-2018:0160";
const TEST_NVD = "https://nvd.nist.gov/vuln/detail/";
const TEST_MITRE = "https://cve.mitre.org/cgi-bin/cvename.cgi?name=";
const TEST_REDHAT = "https://access.redhat.com/errata/";

describe('VulnLink', () => {
  it('is truthy', () => {
    expect(VulnLink).toBeTruthy()
  });
  it('has json match with NVD Default', () => {
    const testRender = TestRenderer.create(
        <VulnLink id={TEST_CVE} />
    );
    const expectedRender = TestRenderer.create(
        <a className="vuln-link" href={TEST_NVD + TEST_CVE}>{TEST_CVE}</a>
    );
    expect(testRender.toJSON()).toEqual(expectedRender.toJSON());
  });
  it('has json match with Mitre URL', () => {
    const testRender = TestRenderer.create(
        <VulnLink src="mitre" id={TEST_CVE} />
    );
    const expectedRender = TestRenderer.create(
        <a className="vuln-link" href={TEST_MITRE + TEST_CVE}>{TEST_CVE}</a>
    );
    expect(testRender.toJSON()).toEqual(expectedRender.toJSON());
  });
  it('has json match with RedHat URL', () => {
    const testRender = TestRenderer.create(
        <VulnLink src="redhat" id={TEST_RHSA} />
    );
    const expectedRender = TestRenderer.create(
        <a className="vuln-link" href={TEST_REDHAT + TEST_RHSA}>{TEST_RHSA}</a>
    );
    expect(testRender.toJSON()).toEqual(expectedRender.toJSON());
  });
  it('has RedHat URL failure with CVE ID', () => {
    const testRender = TestRenderer.create(
        <VulnLink src="redhat" id={TEST_CVE} />
    );
    expect(testRender.toJSON()).toBeNull();
  });
})
