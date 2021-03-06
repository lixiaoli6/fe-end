import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    // 状态在哪里 操作状态的方法就在哪里

    // 标识鼠标移入移出
    state = {
        mouse: false
    }

    //鼠标移入移出的回调 
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag });
            // console.log(flag);
        }
    }

    // 勾选/取消勾选某一个todo的回调 
    handleCheck = (id) => {
        return (event) => {
            // console.log(id,event.target.checked);
            this.props.updateTodo(id, event.target.checked);
        }
    }

    // 删除一个todo的回调 不用高阶
    handleDelete = (id) => {
        if (window.confirm('确定删除吗?')) {
            this.props.deleteTodo(id);
        }
    }

    render() {
        const { id, name, done } = this.props;
        const { mouse } = this.state;
        return (
            <div>
                <li style={{ backgroundColor: mouse ? '#ccc' : '#fff' }} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                    <label>
                        {/* 如果写checked会写死 该必须写onchangechecked */}
                        <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                        <span>{name}</span>
                    </label>
                    <button onClick={() => { this.handleDelete(id) }} className=" btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
                </li>
            </div>
        )
    }
}