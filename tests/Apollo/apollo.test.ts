import { InMemoryCache, ApolloClient, gql } from "apollo-boost";

test("apollo.1.1: local cache", async () => {

    const cache = new InMemoryCache();
    const client = new ApolloClient({
        cache,
        resolvers: { /* ... */ },
    });

    cache.writeData({
        data: {
            isMenuRightSidebarOpen: false,
        },
    });

    const IS_MENU_RIGHT_SIDEBAR_OPEN = gql`
      query GetMenuRightSidebarStatus {
        isMenuRightSidebarOpen @client
      }
    `;

    const { data } = await client.query({
        query: IS_MENU_RIGHT_SIDEBAR_OPEN
    });

    expect(data.isMenuRightSidebarOpen).toBe(false);

});
