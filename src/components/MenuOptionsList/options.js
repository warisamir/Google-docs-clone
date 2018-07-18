const Options = [
    {
        name: "File",
        commands: [
            {
                list: [
                        {
                            name: "Share",
                            command: null,
                            type: 'button'
                        }
                    ],
            },
            {
                list: [
                    {
                        name: "New",
                        command: 'new',
                        type: 'button'
                    },
                    {
                        name: "Open",
                        command: 'open',
                        type: 'file'
                    },
                    {
                        name: "Make a copy...",
                        command: null,
                        type: 'button'
                    }
                ]
            },
            {
                list: [
                        {
                            name: "Download as txt",
                            command: null,
                            type: 'button'
                        }
                    ],
            },
            {
                list: [
                    {
                        name: "Rename",
                        command: null,
                        type: 'button'
                    },
                ]
            },
            {
                list: [
                    {
                        name: "Print",
                        command: null,
                        type: 'button'
                    },
                ]
            },
        ]
    },
    {
        name: "Edit",
        commands: [
            {
                list: [
                        {
                            name: "Undo",
                            command: null,
                            type: 'button'
                        },
                        {
                            name: "Redo",
                            command: null,
                            type: 'button'
                        },
                    ],
            },
            {
                list: [
                    {
                        name: "Cut",
                        command: null,
                        type: 'button'
                    },
                    {
                        name: "Copy",
                        command: null,
                        type: 'button'
                    },
                    {
                        name: "Paste",
                        command: null,
                        type: 'button'
                    },
                    {
                        name: "Delete",
                        command: null,
                        type: 'button'
                    },
                    {
                        name: "Select all",
                        command: null,
                        type: 'button'
                    },
                ]
            },
        ]
    },
    {
        name: "View",
        commands: [
            {
                list: [
                        {
                            name: "Print layout",
                            command: null,
                            type: 'button'
                        },
                        {
                            name: "Mode",
                            command: null,
                            type: 'button'
                        },
                    ],
            },
            {
                list: [
                    {
                        name: "Show ruler",
                        command: null,
                        type: 'button'
                    },
                    {
                        name: "Show document outline",
                        command: null,
                        type: 'button'
                    },
                    {
                        name: "Show Equation toolbar",
                        command: null,
                        type: 'button'
                    }
                ],
                list: [
                    {
                        name: "Full screen",
                        command: null,
                        type: 'button'
                    },
                ]
            },
        ]
    },
    {
        name: "Insert",
        commands: [
            {
                list: [
                        {
                            name: "Image",
                            command: null,
                            type: 'button'
                        },
                        {
                            name: "Table",
                            command: null,
                            type: 'button'
                        },
                    ],
            },
            {
                list: [
                    {
                        name: "Show ruler",
                        command: null,
                        type: 'button'
                    },
                    {
                        name: "Show document outline",
                        command: null,
                        type: 'button'
                    },
                    {
                        name: "Show Equation toolbar",
                        command: null,
                        type: 'button'
                    }
                ],
                list: [
                    {
                        name: "Full screen",
                        command: null,
                        type: 'button'
                    },
                ]
            },
        ]
    },

]

export default Options;