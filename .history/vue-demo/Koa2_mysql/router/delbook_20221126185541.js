
book.del("/delete", async (ctx) => {
    const res = ctx.request.body;
    const { id } = res;
    if (id) {
      const queryData = [id];
      let DELETE_SQL = `DELETE * FROM book WHERE id='${id}'`;
      const data = await query(DELETE_SQL, queryData);
      if (data && data.status && data.status === 200) {
        ctx.body = {
          status: 200,
          msg: "操作成功",
        };
      } else {
        ctx.body = data;
      }
    }
  });