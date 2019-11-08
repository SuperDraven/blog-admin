export const editInlineAndCellColumn = [
  {
    title: '序号',
    type: 'index',
    width: 80,
    align: 'center'
  },
  {
    title: '分类标题',
    align: 'center',
    key: 'title',
    width: 300
  },
  {
    title: '父级分类Id',
    align: 'center',
    key: 'parent_id'
  },
  // {
  //   title: '分类id',
  //   align: 'center',
  //   width: 300,
  //   key: 'category_Id'
  // },
  {
    title: '操作',
    align: 'center',
    width: 200,
    key: 'handle',
    handle: ['edit', 'delete']
  }
]
export const showCurrentColumns = [
  {
    title: '序号',
    type: 'index',
    width: 80,
    align: 'center'
  },
  {
    title: '姓名',
    align: 'center',
    key: 'name',
    width: 300,
    editable: true
  },
  {
    title: '性别',
    align: 'center',
    key: 'sex'
  },
  {
    title: '岗位',
    align: 'center',
    width: 300,
    key: 'work',
    editable: true
  }
]
export const editInlineAndCellData = [
  {
    name: 'Aresn',
    sex: '男',
    work: '前端开发'
  },
  {
    name: 'Lison',
    sex: '男',
    work: '前端开发'
  },
  {
    name: 'Lison',
    sex: '男',
    work: '前端开发'
  },
  {
    name: 'Lison',
    sex: '男',
    work: '前端开发'
  },

  {
    name: 'Lison',
    sex: '男',
    work: '前端开发'
  },
  {
    name: 'Lison',
    sex: '男',
    work: '前端开发'
  },
  {
    name: 'Lison',
    sex: '男',
    work: '前端开发'
  },
  {
    name: 'Lison',
    sex: '男',
    work: '前端开发'
  },
  {
    name: 'lisa',
    sex: '女',
    work: '程序员鼓励师'
  }
];
const tableData = {
  editInlineAndCellColumn: editInlineAndCellColumn,
  showCurrentColumns: showCurrentColumns,
  editInlineAndCellData: editInlineAndCellData

}

export default tableData
