export default async function (event) {
  const { shareToken, JWTCertificate, JWTTrustAnchor, JWTConfiguration, UplinkTrustAnchor, UplinkConfiguration } =
    event.payload;

  console.log ('');
  console.log ('New StartDeviceTransfer request.');
  console.log (`    shareToken          = "${shareToken}"`);
  console.log (`    JWTCertificate      = "${JWTCertificate}"`);
  console.log (`    JWTTrustAnchor      = "${JWTTrustAnchor}"`);
  console.log (`    JWTConfiguration    = "${JWTConfiguration}"`);
  console.log (`    UplinkTrustAnchor   = "${UplinkTrustAnchor}"`);
  console.log (`    UplinkConfiguration = "${UplinkConfiguration}"`);
}
