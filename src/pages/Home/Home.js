import { Layout, Menu } from 'antd';
import React from 'react';
import Contents from '../../components/Content/Content';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import classes from './Home.module.css'
import { LaptopOutlined, NotificationOutlined, MailOutlined } from '@ant-design/icons';
import {DeleteOutlined,CaretDownOutlined} from '@ant-design/icons'
import { useSelector } from 'react-redux';
import {store} from '../../store/index'
import { logout } from '../../store/reducer/authSlice';
const { Header, Content, Sider } = Layout;


const Home = () => {
    const auth = useSelector(state => state.auth)
    function getItem (label, key, icon, children) {
        return {
          key,
          icon,
          children,
          label,
        };
    }

    const items = [
        getItem('首页', '/home/first', <LaptopOutlined />),
        getItem('图表数据', 'sub', <MailOutlined />, [
            getItem('回收订单图表', '/home/rchart', <LaptopOutlined />),
            getItem('换购订单图表', '/home/uchart', <NotificationOutlined />),
            getItem('用户图表', '/home/userchart', <NotificationOutlined />),
        ]),
        getItem('回收管理', 'sub1', <MailOutlined />, [
            getItem('订单审核管理', '/home/audit', <LaptopOutlined />),
            getItem('回收订单管理', '/home/recycle', <LaptopOutlined />),
            getItem('换购订单管理', '/home/change', <NotificationOutlined />),
        ]),
        getItem('活动管理', 'sub2', <MailOutlined />, [
            getItem('新增活动', '/home/resource', <LaptopOutlined />),
            getItem('活动订单审核', '/home/activityaudit', <LaptopOutlined />),
            getItem('活动管理', '/home/activity', <LaptopOutlined />),
        ]),
    ];

    
    const navigate = useNavigate()
    const onClick = (e) => {
        navigate(e.key, { replace: true })
    }

    return (
        <div>
            <Layout>
                {/* 顶栏 */}
                <Header className={classes.header}>
                    <div className={classes.logo} style={{fontSize:'40px'}}><Link to='/home/first' style={{color:'cadetblue'}}><DeleteOutlined />旧物回收利用系统</Link></div>
                 
                    <div className={classes.select}>
                        <button className={classes.name}>
                            <div className={classes.message}>{"欢迎回来，"}{auth.data.username}{"！"}<CaretDownOutlined /></div>
                        </button>
                        <div className={classes.content}>
                            <div>
                                {
                                    auth.isLogged && 
                                    <Link to='/' onClick={()=>store.dispatch(logout())}><button className={classes.exit}>退出</button></Link>
                                }
                            </div>
                        </div>
                    </div>
                </Header>
                {/* 主要内容 */}
                <Layout 
                    style={{
                        height: '100vh',
                        borderRight: 0,
                    }}
                >
                    {/* 侧栏 */}
                    <Sider>
                        <Menu 
                            items={items} 
                            onClick={onClick} 
                            style={{
                                height: '100%',
                                borderRight: 0,
                            }}
                            mode="inline"
                            theme="light"
                        />
                    </Sider>
                    {/* 内容 */}
                    <Content>
                        <Contents/>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default Home;