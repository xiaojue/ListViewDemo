<template>
  <Page>
    <ActionBar>
      <Label text="Home" />
    </ActionBar>

    <GridLayout>
      <ListView for="item in albums">
        <v-template>
          <!-- Shows the list item label in the default color and style. -->
          <StackLayout orientation="horizontal" class="item">
            <Image :src="item.artwork" stretch="none" class="image" />
            <StackLayout
              orientation="vertical"
              class="right"
              verticalAlignment="top"
            >
              <Label :text="item.title" class="title" verticalAlignment="top" />
              <StackLayout
                orientation="vertical"
                class="line"
                verticalAlignment="top"
              >
                <Label :text="item.artist" />
                <Label :text="item.year" />
              </StackLayout>
            </StackLayout>
          </StackLayout>
        </v-template>
      </ListView>
    </GridLayout>
  </Page>
</template>

<script>
export default {
  data: () => {
    const album = {
      id: 1,
      artwork: "https://iph.href.lu/60x60?fg=666666&bg=cccccc",
      title: "It's title",
      artist: "describe",
      year: "2021",
    };
    const albums = Array(1000);
    albums.fill(album);
    return {
      albums,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";

// Custom styles
.fas {
  @include colorize($color: accent);
}

.image {
  width: 60px;
  height: 60px;
}
</style>
