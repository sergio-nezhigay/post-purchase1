import React from "react";

import {
  extend,
  render,
  BlockStack,
  Button,
  CalloutBanner,
  Heading,
  Image,
  Layout,
  TextBlock,
  TextContainer,
  View,
} from "@shopify/post-purchase-ui-extensions-react";

/**
 * Entry point for the `ShouldRender` Extension Point.
 *
 * Returns a value indicating whether or not to render a PostPurchase step, and
 * optionally allows data to be stored on the client for use in the `Render`
 * extension point.
 */
extend(
  "Checkout::PostPurchase::ShouldRender",
  async ({ storage, inputData }) => {
    console.log("logCheckout::PostPurchase::ShouldRender");

    // Prepare initial state with a test value

    const render = true;

    return {
      render,
    };
  }
);

// Entry point for the `Render` Extension Point
render("Checkout::PostPurchase::Render", App);

// Top-level React component
export function App({ extensionPoint, storage, inputData }) {
  //inputData : {"referenceId":"87bfea99e46c032aaeb9d2906fdde5f7","customerId":7216001450157,"destinationCountryCode":"UA","totalPriceSet":{"shopMoney":{"amount":"230.0","currencyCode":"UAH"},"presentmentMoney":{"amount":"230.0","currencyCode":"UAH"}},"lineItems":[{"totalPriceSet":{"shopMoney":{"amount":"230.0","currencyCode":"UAH"},"presentmentMoney":{"amount":"230.0","currencyCode":"UAH"}},"quantity":1,"product":{"id":7790684962989,"title":"DC 12V Power Bank1я планшета Micr1111osof11t Surfac11e Pr11o3 P1111o1","variant":{"id":43437517144237,"title":"Default Title","metafields":[]},"metafields":[]},"sellingPlanId":null}]}

  //  update some customer info, like dummy email into shopify, using api.

  return (
    <BlockStack spacing="loose">
      <CalloutBanner title="Post-purchase extension template">
        Use this template as a starting point to build a great post-purchase
        extension.
      </CalloutBanner>
      <Layout
        maxInlineSize={0.95}
        media={[
          { viewportSize: "small", sizes: [1, 30, 1] },
          { viewportSize: "medium", sizes: [300, 30, 0.5] },
          { viewportSize: "large", sizes: [400, 30, 0.33] },
        ]}
      >
        <View>
          <Image source="https://cdn.shopify.com/static/images/examples/img-placeholder-1120x1120.png" />
        </View>
        <View />
        <BlockStack spacing="xloose">
          <TextContainer>
            <Heading>Post-purchase extension</Heading>
            <TextBlock>
              Here you can cross-sell other products, request a product review
              based on a previous purchase, and much more.
            </TextBlock>

            <TextBlock>
              inputData : {JSON.stringify(inputData?.initialPurchase)}
            </TextBlock>
            <TextBlock>
              extensionPoint : {JSON.stringify(extensionPoint)}
            </TextBlock>
          </TextContainer>
          <Button
            submit
            onPress={() => {
              // eslint-disable-next-line no-console
              console.log(
                `logExtension point ${extensionPoint}`,
                storage.initialData
              );
            }}
          >
            Primary button
          </Button>
        </BlockStack>
      </Layout>
    </BlockStack>
  );
}
