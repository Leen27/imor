type NextFlowTask = {
    $: {
        id: string,
        condition: `${number}`
        points: string,
        color: string
    }
}

type FlowNode = {
    $: {
        task_id: string,
        name: string,
        icon_groupid: string,
        icon: string,
        shape: `${number}, ${number}, ${number}, ${number}`,
        active: `${boolean}`,
        break_point: string,
        status: `${boolean}`,
        applydatetime: string,
        executiing_order: `${number}`,
        timeout: string,
        dev_mode: string,
        linkchangedflag: `${boolean}`,
        isinloop: `${boolean}`
    }
    next_flow: {
        task: NextFlowTask[]
    }[],
}

export type Rule = {
    $: {
		name: string,
		user: string,
		version: string,
		directory: string,
		seed_value: `${number}`,
		task_count: `${number}`,
		client_version: string,
		server_version: string
    }

    using_member_list: Array<{
        uSystemExpression: {
            $: {
                values: string
            }
        }
    }>,
    rule_comments: string[],
    max_thread_count: Array<{
        $: {
            use_import_exe_list: `${boolean}`,
            count: `${number}`
        }
    }>,
    max_divide_count: Array<{
        $: {
            count: `${number}`
        }
    }>,
    db_transaction_mode: Array<{
        $: {
            mode: string
        }
    }>,
    startable_ignore: Array<{
        $: {
            mode: `${boolean}`
        }
    }>,
    endable_ignore: Array<{
        $: {
            mode: `${boolean}`
        }
    }>,
    execute_rulecall_thread: Array<{
        $: {
            mode: `${boolean}`
        }
    }>,
    execute_rtdread_thread: Array<{
        $: {
            mode: `${boolean}`
        }
    }>,
    execute_oplread_thread: Array<{
        $: {
            mode: `${boolean}`
        }
    }>,
    execute_splunkread_thread: Array<{
        $: {
            mode: `${boolean}`
        }
    }>,
    rule_description: string[],
    use_nvl: Array<{
        $: {
            use_integer: `${boolean}`,
            integer: `${number}`,
            use_double: `${boolean}`,
            double: `${number}`
        }
    }>,
    parameters: Array<{
        $: {
            type: string
        },
        parameter: Array<{
            _: string
            $: {
                name: string
                type: string
                default: string
            }
        }>
    }>,
    global_variable: Array<{
        variable: Array<{
            _: string
            $: {
                name: string,
                type: string,
                desc: string,
            }
        }>
    }>,
    main_process: {
        flow: FlowNode[]
    }[],
    flow_summary: string[],
    comments: {
        comment: {
            $: {
                task_id: string,
                shape: string,
                title: string,
                alignment: string,
                color: `${number}`,
                fontcolor: string,
                shapestyle: string,
                flow_type: string,
                is_rule_overview_title: string,
                is_rule_overview_contents: string,
                font: string,
                linkedtask: string
            }
        }[],
		subrule_manager: string[],
		grouprule_manager: string[],
		histories: {
			synopsis: string[],
			history: {
                _: string,
                $: {
                    user: string,
                    action: string,
                    date: string,
                    version_info: string,
                    comment: string
                }[]

            }[],
		}[],
    }[]
} 