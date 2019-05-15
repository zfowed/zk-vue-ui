<template>
  <div
    :is="tag"
    :class="[
      'zk-col',
      {
        [`zk-col-${span}`]: span,
        [`zk-col-xs-${xs}`]: xs,
        [`zk-col-sm-${sm}`]: sm,
        [`zk-col-md-${md}`]: md,
        [`zk-col-lg-${lg}`]: lg,
        [`zk-col-xl-${xl}`]: xl,
        [`zk-col-offset-${offset}`]: offset,
        [`zk-col-pull-${pull}`]: pull,
        [`zk-col-push-${push}`]: push,
      }
    ]"
    :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZkCol',
  componentName: 'ZkCol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: 'div'
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    style () {
      let style = {}
      let parent = this.$parent
      while (parent && parent.$options.componentName !== 'ZkRow') {
        parent = parent.$parent
      }
      const gutter = parent ? parent.gutter : 0
      if (gutter) {
        style.paddingLeft = gutter / 2 + 'px'
        style.paddingRight = style.paddingLeft
      }
      return style
    }
  }
}
</script>

<style lang="scss" scoped>
$--sm: 768px !default;
$--md: 992px !default;
$--lg: 1200px !default;
$--xl: 1920px !default;

$--breakpoints: (
  'xs' : (max-width: $--sm - 1),
  'sm' : (min-width: $--sm),
  'md' : (min-width: $--md),
  'lg' : (min-width: $--lg),
  'xl' : (min-width: $--xl)
);

@mixin res($key, $map: $--breakpoints) {
  // 循环断点Map，如果存在则返回
  @if map-has-key($map, $key) {
    @media only screen and #{inspect(map-get($map, $key))} {
      @content;
    }
  } @else {
    @warn "Undefeined points: `#{$map}`";
  }
}

.zk-col {
  float: left;
  box-sizing: border-box;
}

@for $i from 0 through 24 {
  .zk-col-#{$i} {
    width: (1 / 24 * $i * 100) * 1%;
  }

  .zk-col-offset-#{$i} {
    margin-left: (1 / 24 * $i * 100) * 1%;
  }

  .zk-col-pull-#{$i} {
    position: relative;
    right: (1 / 24 * $i * 100) * 1%;
  }

  .zk-col-push-#{$i} {
    position: relative;
    left: (1 / 24 * $i * 100) * 1%;
  }
}

@include res(xs) {
  .zk-col-xs-0 {
    display: none;
  }
  @for $i from 0 through 24 {
    .zk-col-xs-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .zk-col-xs-offset-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .zk-col-xs-pull-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .zk-col-xs-push-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}

@include res(sm) {
  .zk-col-sm-0 {
    display: none;
  }
  @for $i from 0 through 24 {
    .zk-col-sm-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .zk-col-sm-offset-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .zk-col-sm-pull-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .zk-col-sm-push-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}

@include res(md) {
  .zk-col-md-0 {
    display: none;
  }
  @for $i from 0 through 24 {
    .zk-col-md-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .zk-col-md-offset-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .zk-col-md-pull-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .zk-col-md-push-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}

@include res(lg) {
  .zk-col-lg-0 {
    display: none;
  }
  @for $i from 0 through 24 {
    .zk-col-lg-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .zk-col-lg-offset-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .zk-col-lg-pull-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .zk-col-lg-push-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}

@include res(xl) {
  .zk-col-xl-0 {
    display: none;
  }
  @for $i from 0 through 24 {
    .zk-col-xl-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .zk-col-xl-offset-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .zk-col-xl-pull-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .zk-col-xl-push-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}
</style>
