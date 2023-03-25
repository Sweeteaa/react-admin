import '@wangeditor/editor/dist/css/style.css' // 引入 css
import classes from './Resource.module.css'
import React, { useState, useEffect } from 'react'
// import { Button, message, Upload } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
import { message } from 'antd';
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import axios from 'axios'

function Resource() {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
            messageApi.open({
            type: 'success',
            content: '新增活动通过！',
        });
    };
    const warning = () => {
        messageApi.open({
          type: 'warning',
          content: '新增活动操作失败！',
        });
    };
    // editor 实例
    const [editor, setEditor] = useState(null)                   // JS 语法
    const [title, setTitle] = useState()
    const [text, setText] = useState()
    const [need, setNeed] = useState()
    const [fileList, setFileList] = useState([])

    // 编辑器内容
    const [html, setHtml] = useState('<p>hello</p>')

    // 模拟 ajax 请求，异步设置 html
    useEffect(() => {
        setTimeout(() => {
            setHtml('<p>输入正文内容</p>')
        }, 1500)
    }, [])

    const titleChange = (e)=>{
        // console.log(e.target.value)
        setTitle(e.target.value)
    }

    const textChange = (e)=>{
        // console.log(e.target.value)
        setText(e.target.value)
    }

    const needChange = (e)=>{
        // console.log(e.target.value)
        setNeed(e.target.value)
    }

    const urlChange = (e)=>{
        // console.log(e.target.value)
        setFileList(e.target.value)
    }

    const onSubmit = () =>{

        let params = {
            title:title,
            text:text,
            img:fileList,
            main:html,
            num:need
        }
        // console.log(params)
        return new Promise((resolve,reject) => {
            axios({
                  method:'post',
                  url:`http://127.0.0.1:3001/user/activity/addActivity`,
                  data:params,
                  headers:{'Content-Type':'application/x-www-form-urlencoded'}
              })
            .then((res) => {
                resolve( res );
                if(res.data.status !== 1){
                    success();
                }else{
                    warning();
                }
                console.log(res)
            })
            .catch((error) => {
                reject( error );
                console.log(error)
            });
        })
    }

    // 工具栏配置
    const toolbarConfig = {}                        // JS 语法

    // 编辑器配置
    const editorConfig = {                         // JS 语法
        placeholder: '请输入内容...',
    }

    // 及时销毁 editor ，重要！
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
            setFileList(null)
            setNeed(null)
            setText(null)
            setTitle(null)
        }
    }, [editor])

    return (
        <>
            <div className={classes.main}>
            {contextHolder}
                <div className={classes.title}>
                    <p className={classes.pp}>标题</p>
                    <div>
                        标题：<input onChange={titleChange.bind(this)} className={classes.inp}/>
                    </div>
                    <div>
                        摘要：<input onChange={textChange.bind(this)} maxLength="50" className={classes.text} placeholder="输入简介不超过五十字"/>
                    </div>
                    <div>
                        封面：<input onChange={urlChange.bind(this)} className={classes.inp} type='textarea' autosize/>
                    </div>
                    <div>
                        需要：<input onChange={needChange.bind(this)} className={classes.inp}/>
                    </div>
                </div>
                <div style={{ border: '1px solid #ccc', zIndex: 100}}>
                    <Toolbar
                        editor={editor}
                        defaultConfig={toolbarConfig}
                        mode="default"
                        style={{ borderBottom: '1px solid #ccc', width:'1400px' }}
                    />
                    <Editor
                        defaultConfig={editorConfig}
                        value={html}
                        onCreated={setEditor}
                        onChange={editor => setHtml(editor.getHtml())}
                        mode="default"
                        style={{ height: '450px', overflowY: 'hidden', width:'1400px' }}
                    />
                </div>
                <button onClick={onSubmit} className={classes.btn}>发布</button>
            </div>
        </>
    )
}

export default Resource;