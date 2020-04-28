<template lang="pug">
  div.if-else-container
    p.msg-text {{msg}}
    reademe
</template>
<script>
import reademe from './readme.md';
// import func from '../../../vue-temp/vue-editor-bridge';
export default {
  components: { reademe },
  data() {
    return {
      msg: 'hello',
    };
  },
  mounted() {
    this.hanldeIfElse(2);
  },
  methods: {
    testA() {
      this.msg = 'aa';
    },
    testB() {
      this.msg = 'bb';
    },
    testC() {
      this.msg = 'CC';
    },
    hanldeIfElse(status) {
      console.log('status:', status);
      //  假如现在条件判断是这样子的
      // if (status === 1) {
      //   this.msg = 'it is aa';
      // } else if (status === 2) {
      //   this.msg = 'it is bb';
      // } else if (status === 3) {
      //   this.msg = 'it is cc';
      // } else if (status === 4) {
      //   this.msg = 'it is dd';
      // } else if (status === 5) {
      //   this.msg = 'it is ee';
      // }
      //  进一步优化可以用switch case， 这样看起来易读一些
      // 高级优化，使得代码看来比较优雅
      // const options = new Map([
      //   [{ status: 1 }, 'aa'],
      //   [{ status: 2 }, 'bb'],
      // ]);
      // const option = [...options].filter((key, val) => {
      //   return key[0].status === status;
      // });
      // option.forEach(([item, value]) => {
      //   this.msg = value;
      // });

      //  继上面的方法，在做进一步优化。
      //  假如每项条件里所干的事情很多很杂，此时可以单独地写成一个个的函数去处理每项条件需要所的事
      // const options = new Map([
      //   [{ status: 1 }, () => this.testA()],
      //   [{ status: 2 }, () => this.testB()],
      // ]);
      // const option = [...options].filter((key, val) => {
      //   return key[0].status === status;
      // });
      // option.forEach(([item, value]) => {
      //   value.call(this);
      // });

      // 如果是比较条件判断比较复杂的时候，比如：
      // if (user === 'guest' && status === 1) {
      //   //  to do something
      //   if (type === 'aa') {
      //   }
      // } else if (user === 'author' && status === 2) {
      //   if (type === 'aa') {
      //   } else {
      //   }
      // } else if (user === 'custom' && status === 3) {
      // }
      // ...

      const options2 = new Map([
        [{ user: 'guest', status: 1, type: 'aa' }, () => this.testA()],
        [{ user: 'author', status: 2, type: 'aa' }, () => this.testB()],
        [{ user: 'custom', status: 3, type: 'bb' }, () => this.testC()],
      ]);

      const optionHandler = (user, status, type) => {
        const option2 = [...options2].filter(([key, val]) => {
          console.log(key, 'kk', val);
          return key.user === user && key.status === status && key.type === type;
        });
        console.log('option2', option2);
        option2.forEach(([item, value]) => {
          console.log(item);
          value.call(this);
        });
      };
      optionHandler('author', 2, 'aa');
    },
  },
};
</script>
