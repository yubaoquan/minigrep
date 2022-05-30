<template>
  <div class="container">
    <div class="row1">
      <div class="char">{{ chars[0] }}</div>
    </div>
    <div>
      <div>
        <el-radio-group v-model="playType">
          <el-radio label="char">字</el-radio>
          <el-radio label="word">词</el-radio>
        </el-radio-group>
      </div>

      <el-button type="primary" @click="play" :disabled="playing">play</el-button>
      <el-button type="default" @click="stop" :disabled="!playing">stop</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const words = [
      '前面',
      '已经',
      '介绍过',
      ',',
      '我们',
      '将',
      '前端',
      '开发',
      '中',
      '涉及',
      '的',
      '场景',
      '收敛到',
      '300',
      '种',
      '：',
      '应用',
      '、',
      '模块',
      '和',
      'monorepo',
      '。',
      '不仅',
      '解决了',
      '业务',
      '模板',
      '数量',
      '爆炸',
      '的',
      '问题',
      '。',
      '融合后',
      '的',
      '工程',
      '类型',
      '，',
      '比如',
      'MWA',
      '不是',
      '多个',
      '场景',
      '简单',
      '叠加',
      '，',
      '导致',
      '工程',
      '变的',
      '大而全',
      '，',
      '通过',
      '抽象',
      '可以',
      '做到',
      '很',
      '轻量',
      '，',
      '也能',
      '更容易',
      '交付',
      '一些',
      '之前',
      '不好',
      '实现',
      '的',
      '功能',
      '。',
    ]

    return {
      words,
      story: words.join(''),
      playing: false,
      chars: [],
      playType: 'char',
    }
  },
  mounted() {
    this.play()
  },
  methods: {
    genList() {
      if (this.playType === 'char') {
        this.chars = this.story
          .replace(/[^\w\d]{1}/g, (char) => ` ${char} `)
          .split(/\s+/)
          .filter((str) => str.trim())
      }

      if (this.playType === 'word') this.chars = [...this.words]
    },
    play() {
      this.genList()
      this.playing = true
      this.next()
    },
    next() {
      console.info('next')
      if (!this.chars.length || !this.playing) return this.stop()
      const duration = this.chars[0].length === 1 ? 160 : 300 // 单个汉字/字符显示时间短点
      setTimeout(() => {
        this.chars.shift()
        this.next()
      }, duration)
    },
    stop() {
      this.playing = false
    },
  },
}
</script>

<style lang="less" scoped>
.container {
  text-align: center;
}

.char {
  display: inline-block;
  font-weight: bold;
  font-size: 26px;
  padding: 10px;
  border-bottom: 2px solid red;
  min-width: 30px;
  height: 30px;
  text-align: center;
  transition: all 1s;
}

.row1 {
  padding: 20px 0;
}
</style>
