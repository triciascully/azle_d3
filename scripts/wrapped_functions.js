// wrapped_functions
function adding_d3_visuals() {
    az.add_overlay({
        "this_class": "adding_visual_modal",
        "center_screen" : true,
        "outside_close" : true
    })
    az.style_overlay('adding_visual_modal', 1, {
        "width": "auto",
        "height": "auto",
        "border-radius" : "4px",
        "padding" : "20px"
    })
    az.add_text('adding_visual_modal', 1, {
        "this_class": "wrapper_ex_text",
        "text": "ADDING D3 VISUALS"
    })
    az.style_text('wrapper_ex_text', 1, {
        "font-weight": "bold"
    })
    az.style_text('explain_wraps', 1, {
        "text-align": "left"
    })
    az.add_code("adding_visual_modal", 1, {
        "this_class": "azle_d3_code",
        "code": 'az.add_d3_visual("my_layout_cell", 1, {<div>&nbsp; &nbsp; "this_class" : "my_barchart",</div><div>&nbsp; &nbsp; "html_path" : "visuals/barchart.html",</div><div>&nbsp; &nbsp; "wrapper_arguments" : barchart_wrapper_args,</div><div>&nbsp; &nbsp; "extra_functions" : barchart_extras</div><div>})</div>'
    })
    az.style_code('azle_d3_code', 1, {
        "text-align": "left",
        "width": "auto",
        "padding": "14px"
    })
    az.style_word('azle_d3_code', 1, {
        "this_class": "highlighted_code",
        "word": "az.add_d3_visual",
        "color": "yellow",
        "font-weight": "bold"
    })
}

function creating_wrapper_args() {
    az.add_overlay({
        "this_class": "creating_wrapper_args_modal_content",
        "center_screen" : true,
        "outside_close" : true
    })
    az.style_overlay('creating_wrapper_args_modal_content', 1, {
        "width": "auto",
        "height": "auto",
        "border-radius" : "4px",
        "padding" : "20px"
    })
    az.add_text('creating_wrapper_args_modal_content', 1, {
        "this_class": "wrapper_ex_text",
        "text": "WRAPPER ARGUMENTS"
    })
    az.style_text('wrapper_ex_text', 1, {
        "font-weight": "bold"
    })
    az.add_code("creating_wrapper_args_modal_content", 1, {
        "this_class": "azle_d3_code",
        "code": 'barchart_wrapper_args = {<div>&nbsp; &nbsp; "data_path" : "../data/bar_data.tsv",</div><div>&nbsp; &nbsp; "y_title" : "",</div><div>&nbsp; &nbsp; "top_choice" : 30,</div><div>&nbsp; &nbsp; "right_choice" : 30,</div><div>&nbsp; &nbsp; "bottom_choice" : 30,</div><div>&nbsp; &nbsp; "left_choice" : 60,</div><div>&nbsp; &nbsp; "bar_color" : "rgb(165, 11, 81)",</div><div>&nbsp; &nbsp; "title_color" : "grey",</div><div>&nbsp; &nbsp; "chart_width" : 950</div><div>}</div>'
    })
    az.style_code('azle_d3_code', 1, {
        "text-align": "left",
        "width": "auto",
        "padding": "14px"
    })
    az.style_word('azle_d3_code', 1, {
        "this_class": "highlighted_code",
        "word": "barchart_wrapper_args",
        "color": "yellow",
        "font-weight": "bold"
    })
}

function creating_extra_functs() {
    az.add_overlay({
        "this_class": "extra_functs_modal_content",
        "center_screen" : true,
        "outside_close" : true
    })
    az.style_overlay('extra_functs_modal_content', 1, {
        "width": "auto",
        "height": "auto",
        "border-radius" : "4px",
        "padding" : "20px"
    })
    az.add_text('extra_functs_modal_content', 1, {
        "this_class": "wrapper_ex_text",
        "text": "EXTRA FUNCTIONS"
    })
    az.style_text('wrapper_ex_text', 1, {
        "font-weight": "bold"
    })
    az.add_code("extra_functs_modal_content", 1, {
        "this_class": "azle_d3_code",
        "code": 'barchart_extras = {<div>&nbsp; &nbsp; "text_color" : "az.all_style_d3("text", {"fill" : "white"})",</div><div>&nbsp; &nbsp; "text_size" : "az.all_style_d3("text", {"font-size" : "17px"})"</div><div>}</div>'
    })
    az.style_code('azle_d3_code', 1, {
        "text-align": "left",
        "width": "auto",
        "padding": "14px"
    })
    az.style_word('azle_d3_code', 1, {
        "this_class": "highlighted_code",
        "word": "barchart_extras",
        "color": "yellow",
        "font-weight": "bold"
    })
}

function bind_to_element() {
    az.add_overlay({
        "this_class": "bind_modal_content",
        "center_screen" : true,
        "outside_close" : true
    })
    az.style_overlay('bind_modal_content', 1, {
        "width": "auto",
        "height": "auto",
        "border-radius" : "4px",
        "padding" : "20px"
    })
    az.add_text('bind_modal_content', 1, {
        "this_class": "wrapper_ex_text",
        "text": "BINDING D3 TO UI ELEMENTS"
    })
    az.style_text('wrapper_ex_text', 1, {
        "font-weight": "bold"
    })
    az.add_text('bind_modal_content', 1, {
        "this_class": "explain_wraps",
        "text": "<br>Create the UI element..."
    })
    az.add_code("bind_modal_content", 1, {
        "this_class": "azle_d3_code",
        "code": 'az.add_slider("my_layout_cell", 1, {<div>&nbsp; &nbsp; "this_class" : "my_slider",</div><div>&nbsp; &nbsp; "default_value" : 7,</div><div>&nbsp; &nbsp; "min_value" : 0,</div><div>&nbsp; &nbsp; "max_value" : 30</div><div>})</div>'
    })
    az.add_text('bind_modal_content', 1, {
        "this_class": "explain_wraps",
        "text": "...place call_d3_wrapper (or call_d3_extra) inside a regular JS function:"
    })
    az.add_code("bind_modal_content", 1, {
        "this_class": "azle_d3_code",
        "code": 'function change_bottom(passed_value) {<div>&nbsp; &nbsp; az.call_d3_wrapper("my_barchart", 1, {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "wrapper_arguments" : barchart_wrapper_args,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "extra_functions" : barchart_extras,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "bottom_choice" : passed_value</div><div>&nbsp; &nbsp; &nbsp; &nbsp; })</div><div>}</div>'
    })
    az.style_word('azle_d3_code', 2, {
        "this_class": "highlighted_code",
        "word": "call_d3_wrapper",
        "color": "yellow",
        "font-weight": "bold"
    })

    az.style_word('bind_modal_content', 1, {
        "this_class": "bold_text",
        "word": "call_d3_wrapper",
        "font-weight": "bold"
    })
    az.style_word('bind_modal_content', 1, {
        "this_class": "bold_text",
        "word": "call_d3_extra",
        "font-weight": "bold"
    })

    az.style_code('azle_d3_code', 1, {
        "text-align": "left",
        "width": "auto",
        "padding": "14px"
    })
    az.style_word('azle_d3_code', 1, {
        "this_class": "highlighted_code",
        "word": "az.add_slider",
        "color": "yellow",
        "font-weight": "bold"
    })
     az.add_text('bind_modal_content', 1, {
        "this_class": "explain_wraps",
        "text": "...add an event to UI element and pass value to above function:"
    })
    az.add_code("bind_modal_content", 1, {
        "this_class": "azle_d3_code",
        "code": 'az.add_event("my_slider", 1, {<div>&nbsp; &nbsp; "type" : "as_change",</div><div>&nbsp; &nbsp; "function" : change_bottom(this.value)</div><div>})</div>'
})
az.style_word('azle_d3_code', 3, {
        "this_class": "highlighted_code",
        "word": "az.add_event",
        "color": "yellow",
        "font-weight": "bold"
    })
}

function bar_color() {
    az.add_color_picker({
        "this_class": "bar_color_picker",
        "function": `
    az.call_d3_wrapper('my_d3', 1, {
    "wrapper_arguments" : barchart_wrapper_args,
    "extra_functions" : barchart_extras,
    "bar_color" : az.global_current_color
    })
    `
    })
}

function text_color() {
    az.add_color_picker({
        "this_class": "text_color_picker",
        "function": `
    az.call_d3_extra('my_d3', 1, {
       "extra_functions" : barchart_extras,
       "text_color" : "az.all_style_d3('text', {'fill' : '" + az.global_current_color + "'})"
    })
    `
    })
}

function text_size() {
   az.add_overlay({
        "this_class": "text_size_modal_content",
        "center_screen" : true,
        "outside_close" : true
    })
    az.style_overlay('text_size_modal_content', 1, {
        "width": "auto",
        "height": "auto",
        "border-radius" : "4px",
        "padding" : "20px"
    })
    /*
    az.add_modal({
        "this_class": "text_size_modal",
        "content_class": "text_size_modal_content"
    })
    az.style_modal('text_size_modal', 1, {
        "width": "auto",
        "height": "auto"
    })
    */
    az.add_text('text_size_modal_content', 1, {
        "this_class": "text_size_title",
        "text": "TEXT SIZE<br><br>"
    })
    az.add_slider('text_size_modal_content', 1, {
        "this_class": "d3_edit_slider",
        "default_value": az.current_d3_extras_value(barchart_extras, 'text_size', 'font-size'),
        "min_value": 10,
        "max_value": 30
    })
    az.add_event('d3_edit_slider', 1, {
        "type": "as_change",
        "function": `
    az.call_d3_extra('my_d3', 1, {
       "extra_functions" : barchart_extras,
       "text_size" : "az.all_style_d3('text', {'font-size' : '" + this.value + "'})"
    })
`
    })
}

function bottom() {
    az.add_overlay({
        "this_class": "text_size_modal_content",
        "center_screen" : true,
        "outside_close" : true
    })
    az.style_overlay('text_size_modal_content', 1, {
        "width": "auto",
        "height": "auto",
        "border-radius" : "4px",
        "padding" : "20px"
    })
    /*
    az.add_modal({
        "this_class": "text_size_modal",
        "content_class": "text_size_modal_content"
    })
    az.style_modal('text_size_modal', 1, {
        "width": "auto",
        "height": "auto"
    })
    */
    az.add_text('text_size_modal_content', 1, {
        "this_class": "text_size_title",
        "text": "BOTTOM<br><br>"
    })
    az.add_slider('text_size_modal_content', 1, {
        "this_class": "d3_edit_slider",
        "default_value": barchart_wrapper_args.bottom_choice,
        "min_value": 0,
        "max_value": 500
    })
    az.add_event('d3_edit_slider', 1, {
        "type": "as_change",
        "function": `
    az.call_d3_wrapper('my_d3', 1, {
        "wrapper_arguments" : barchart_wrapper_args,
        "extra_functions" : barchart_extras,
        "bottom_choice" : this.value
        })
    `
    })
}

function top_op() {
    az.add_overlay({
        "this_class": "text_size_modal_content",
        "center_screen" : true,
        "outside_close" : true
    })
    az.style_overlay('text_size_modal_content', 1, {
        "width": "auto",
        "height": "auto",
        "border-radius" : "4px",
        "padding" : "20px"
    })
    /*
    az.add_modal({
        "this_class": "text_size_modal",
        "content_class": "text_size_modal_content"
    })
    az.style_modal('text_size_modal', 1, {
        "width": "auto",
        "height": "auto"
    })
    */
    az.add_text('text_size_modal_content', 1, {
        "this_class": "text_size_title",
        "text": "TOP<br><br>"
    })
    az.add_slider('text_size_modal_content', 1, {
        "this_class": "d3_edit_slider",
        "default_value": barchart_wrapper_args.top_choice,
        "min_value": 0,
        "max_value": 500
    })
    az.add_event('d3_edit_slider', 1, {
        "type": "as_change",
        "function": `
    az.call_d3_wrapper('my_d3', 1, {
        "wrapper_arguments" : barchart_wrapper_args,
        "extra_functions" : barchart_extras,
        "top_choice" : this.value
        })
    `
    })
}

function left() {
    az.add_overlay({
        "this_class": "text_size_modal_content",
        "center_screen" : true,
        "outside_close" : true
    })
    az.style_overlay('text_size_modal_content', 1, {
        "width": "auto",
        "height": "auto",
        "border-radius" : "4px",
        "padding" : "20px"
    })
    /*
    az.add_modal({
        "this_class": "text_size_modal",
        "content_class": "text_size_modal_content"
    })
    az.style_modal('text_size_modal', 1, {
        "width": "auto",
        "height": "auto"
    })
    */
    az.add_text('text_size_modal_content', 1, {
        "this_class": "text_size_title",
        "text": "LEFT<br><br>"
    })
    az.add_slider('text_size_modal_content', 1, {
        "this_class": "d3_edit_slider",
        "default_value": barchart_wrapper_args.left_choice,
        "min_value": 0,
        "max_value": 500
    })
    az.add_event('d3_edit_slider', 1, {
        "type": "as_change",
        "function": `
    az.call_d3_wrapper('my_d3', 1, {
        "wrapper_arguments" : barchart_wrapper_args,
        "extra_functions" : barchart_extras,
        "left_choice" : this.value
    })
    `
    })
}

function right() {
    az.add_overlay({
        "this_class": "text_size_modal_content",
        "center_screen" : true,
        "outside_close" : true
    })
    az.style_overlay('text_size_modal_content', 1, {
        "width": "auto",
        "height": "auto",
        "border-radius" : "4px",
        "padding" : "20px"
    })
    /*
    az.add_modal({
        "this_class": "text_size_modal",
        "content_class": "text_size_modal_content"
    })
    az.style_modal('text_size_modal', 1, {
        "width": "auto",
        "height": "auto"
    })
    */
    az.add_text('text_size_modal_content', 1, {
        "this_class": "text_size_title",
        "text": "RIGHT<br><br>"
    })
    az.add_slider('text_size_modal_content', 1, {
        "this_class": "d3_edit_slider",
        "default_value": barchart_wrapper_args.right_choice,
        "min_value": 0,
        "max_value": 500
    })
    az.add_event('d3_edit_slider', 1, {
        "type": "as_change",
        "function": `
    az.call_d3_wrapper('my_d3', 1, {
        "wrapper_arguments" : barchart_wrapper_args,
        "extra_functions" : barchart_extras,
        "right_choice" : this.value
    })
    `
    })
}

function animate_rubberBand() {
    az.call_d3_extra('my_d3', 1, {
        "extra_functions": barchart_extras,
        "animate_rubber": `
            az.all_apply_id('bar')
            az.all_add_event('bar', {
                "type" : "hover",
                "function" : "az.animate_element('bar', az.get_target_instance(this.id), {'type' : 'rubberBand'})"
            })
            `
    })
}

function animate_zoomOutUp() {
    az.call_d3_extra('my_d3', 1, {
        "extra_functions": barchart_extras,
        "animate_rubber": `
            az.all_apply_id('bar')
            az.all_add_event('bar', {
                "type" : "hover",
                "function" : "az.animate_element('bar', az.get_target_instance(this.id), {'type' : 'zoomOutUp'})"
            })
            `
    })
}

function click_and_get_data() {
    az.call_d3_extra('my_d3', 1, {
        "extra_functions": barchart_extras,
        "click_data": `
            az.all_apply_id('bar')
            az.all_add_event('bar', {
                "type" : "click",
                "function" : "alert($('#' + this.id).attr('height'))"
            })
            `
    })
}

function update_data_a() {
    az.call_d3_wrapper('my_d3', 1, {
        "wrapper_arguments": barchart_wrapper_args,
        "extra_functions": barchart_extras,
        "data_path": "../data/bar_data.tsv"
    })
}

function update_data_b() {
    az.call_d3_wrapper('my_d3', 1, {
        "wrapper_arguments": barchart_wrapper_args,
        "extra_functions": barchart_extras,
        "data_path": "../data/bar_data_b.tsv"
    })
}

function update_data_full() {
    az.toggle_functions('update_data_b()', 'update_data_a()')
}

function start_over() {
    barchart_wrapper_args = {
        "data_path": "../data/bar_data.tsv",
        "y_title": "",
        "top_choice": 30,
        "right_choice": 30,
        "bottom_choice": 30,
        "left_choice": 60,
        "bar_color": "rgb(165, 11, 81)",
        "title_color": "grey",
        "chart_width": 950
    }
    barchart_extras = {
        "text_color": "az.all_style_d3('text', {'fill' : 'grey'})",
        "text_size": "az.all_style_d3('text', {'font-size' : '17px'})"
    }
    az.call_d3_wrapper('my_d3', 1, {
        "wrapper_arguments": barchart_wrapper_args,
        "extra_functions": barchart_extras
    })
}

function circle_size() {
    az.add_overlay({
        "this_class": "text_size_modal_content",
        "center_screen" : true,
        "outside_close" : true
    })
    az.style_overlay('text_size_modal_content', 1, {
        "width": "auto",
        "height": "auto",
        "border-radius" : "4px",
        "padding" : "20px"
    })
    /*
    az.add_modal({
        "this_class": "text_size_modal",
        "content_class": "text_size_modal_content"
    })
    az.style_modal('text_size_modal', 1, {
        "width": "auto",
        "height": "auto"
    })
    */
    az.add_text('text_size_modal_content', 1, {
        "this_class": "text_size_title",
        "text": "CIRCLE SIZE<br><br>"
    })
    az.add_slider('text_size_modal_content', 1, {
        "this_class": "d3_edit_slider",
        "default_value": az.current_d3_extras_value(scatter_extras, 'circle_size', 'r'),
        "min_value": 0,
        "max_value": 30
    })
    az.add_event('d3_edit_slider', 1, {
        "type": "as_change",
        "function": `
    az.call_d3_extra('scatter_chart', 1, {
        "extra_functions" : scatter_extras,
        "circle_size" : "az.all_style_d3('dot', {'r' : " + this.value + "})"
    })
    `
    })
}
hold_op_val = {
    'scatter_dot': 0
}

function circle_opacity() {
    az.add_overlay({
        "this_class": "text_size_modal_content",
        "center_screen" : true,
        "outside_close" : true
    })
    az.style_overlay('text_size_modal_content', 1, {
        "width": "auto",
        "height": "auto",
        "border-radius" : "4px",
        "padding" : "20px"
    })
    /*
    az.add_modal({
        "this_class": "text_size_modal",
        "content_class": "text_size_modal_content"
    })
    az.style_modal('text_size_modal', 1, {
        "width": "auto",
        "height": "auto"
    })
    */
    az.add_text('text_size_modal_content', 1, {
        "this_class": "text_size_title",
        "text": "OPACITY<br><br>"
    })
    az.add_slider('text_size_modal_content', 1, {
        "this_class": "d3_edit_slider",
        "default_value": hold_op_val.scatter_dot,
        "min_value": 0,
        "max_value": 100,
        "label_multiplier": 1 / 100
    })
    az.style_html('slider_label', 1, {
        "display": "none"
    })
    az.add_event('d3_edit_slider', 1, {
        "type": "as_change",
        "function": `
        hold_op_val['scatter_dot'] = this.value
        az.call_d3_extra('scatter_chart', 1, {
            "extra_functions" : scatter_extras,
            "circle_opacity" : "az.all_style_d3('dot', {'opacity' : " + this.value/100 + "})"
        })
        `
    })
}

function change_width() {
    az.add_overlay({
        "this_class": "text_size_modal_content",
        "center_screen" : true,
        "outside_close" : true
    })
    az.style_overlay('text_size_modal_content', 1, {
        "width": "auto",
        "height": "auto",
        "border-radius" : "4px",
        "padding" : "20px"
    })
    /*
    az.add_modal({
        "this_class": "text_size_modal",
        "content_class": "text_size_modal_content"
    })
    az.style_modal('text_size_modal', 1, {
        "width": "auto",
        "height": "auto"
    })
    */
    az.add_text('text_size_modal_content', 1, {
        "this_class": "text_size_title",
        "text": "CHART WIDTH<br><br>"
    })
    az.add_slider('text_size_modal_content', 1, {
        "this_class": "d3_edit_slider",
        "default_value": scatter_wrapper_args.chart_width,
        "min_value": 500,
        "max_value": 930
    })
    az.add_event('d3_edit_slider', 1, {
        "type": "as_change",
        "function": `
    az.call_d3_wrapper('scatter_chart', 1, {
        "wrapper_arguments" : scatter_wrapper_args,
        "extra_functions" : scatter_extras,
        "chart_width" : this.value
     })
    `
    })
}

function dataset1() {
    az.call_d3_wrapper('scatter_chart', 1, {
        "wrapper_arguments": scatter_wrapper_args,
        "extra_functions": scatter_extras,
        "data_path": "../data/scatter_data.tsv"
    })
    delete scatter_extras['circle_color'] // to reset original colors after using dropdown
    delete scatter_extras['legend'] // to reset original legend after using dropdown
}

function dataset2() {
    az.call_d3_wrapper('scatter_chart', 1, {
        "wrapper_arguments": scatter_wrapper_args,
        "extra_functions": scatter_extras,
        "data_path": "../data/scatter_data_b.tsv"
    })
    delete scatter_extras['circle_color'] // to reset original colors after using dropdown
    delete scatter_extras['legend'] // to reset original legend after using dropdown
}

function dataset3() {
    az.call_d3_wrapper('scatter_chart', 1, {
        "wrapper_arguments": scatter_wrapper_args,
        "extra_functions": scatter_extras,
        "data_path": "../data/scatter_data_c.tsv"
    })
    delete scatter_extras['circle_color'] // to reset original colors after using dropdown
    delete scatter_extras['legend'] // to reset original legend after using dropdown
}

function choose_class(choice) {
    if (choice == 'Setosa') {
        setosa_only()
    }
    if (choice == 'Versicolor') {
        versicolor_only()
    }
    if (choice == 'Virginica') {
        virginica_only()
    }
}

function setosa_only() {
    az.call_d3_wrapper('scatter_chart', 1, {
        "wrapper_arguments": scatter_wrapper_args,
        "extra_functions": scatter_extras,
        "data_path": "../data/scatter_data_setosa.tsv"
    })
    az.call_d3_extra('scatter_chart', 1, {
        "extra_functions": scatter_extras,
        "circle_color": "az.all_style_d3('dot', {'fill' : 'rgb(31, 119, 180)'})",
        "legend": "az.style_d3('rect', 1, {'fill' : 'rgb(31, 119, 180)'})"
    })
}

function versicolor_only() {
    az.call_d3_wrapper('scatter_chart', 1, {
        "wrapper_arguments": scatter_wrapper_args,
        "extra_functions": scatter_extras,
        "data_path": "../data/scatter_data_versicolor.tsv"
    })
    az.call_d3_extra('scatter_chart', 1, {
        "extra_functions": scatter_extras,
        "circle_color": "az.all_style_d3('dot', {'fill' : 'rgb(255, 127, 14)'})",
        "legend": "az.style_d3('rect', 1, {'fill' : 'rgb(255, 127, 14)'})"
    })
}

function virginica_only() {
    az.call_d3_wrapper('scatter_chart', 1, {
        "wrapper_arguments": scatter_wrapper_args,
        "extra_functions": scatter_extras,
        "data_path": "../data/scatter_data_virginica.tsv"
    })
    az.call_d3_extra('scatter_chart', 1, {
        "extra_functions": scatter_extras,
        "circle_color": "az.all_style_d3('dot', {'fill' : 'rgb(44, 160, 44)'})",
        "legend": "az.style_d3('rect', 1, {'fill' : 'rgb(44, 160, 44)'})"
    })
}

function change_line_chart(bar_instance) {
    if (bar_instance == 1) {
        az.call_d3_wrapper('dual_2', 1, {
            "wrapper_arguments": linechart_wrapper_args,
            "extra_functions": linechart_extras,
            "data_path": "../data/linechart_data_a.tsv"
        })
    }
    if (bar_instance == 2) {
        az.call_d3_wrapper('dual_2', 1, {
            "wrapper_arguments": linechart_wrapper_args,
            "extra_functions": linechart_extras,
            "data_path": "../data/linechart_data_b.tsv"
        })
    }
    if (bar_instance == 3) {
        az.call_d3_wrapper('dual_2', 1, {
            "wrapper_arguments": linechart_wrapper_args,
            "extra_functions": linechart_extras,
            "data_path": "../data/linechart_data_c.tsv"
        })
    }
    if (bar_instance == 4) {
        az.call_d3_wrapper('dual_2', 1, {
            "wrapper_arguments": linechart_wrapper_args,
            "extra_functions": linechart_extras,
            "data_path": "../data/linechart_data_d.tsv"
        })
    }
    if (bar_instance == 5) {
        az.call_d3_wrapper('dual_2', 1, {
            "wrapper_arguments": linechart_wrapper_args,
            "extra_functions": linechart_extras,
            "data_path": "../data/linechart_data_e.tsv"
        })
    }
    if (bar_instance == 6) {
        az.call_d3_wrapper('dual_2', 1, {
            "wrapper_arguments": linechart_wrapper_args,
            "extra_functions": linechart_extras,
            "data_path": "../data/linechart_data_f.tsv"
        })
    }
    if (bar_instance == 7) {
        az.call_d3_wrapper('dual_2', 1, {
            "wrapper_arguments": linechart_wrapper_args,
            "extra_functions": linechart_extras,
            "data_path": "../data/linechart_data_g.tsv"
        })
    }
}

function play_timeline() {
    az.style_button('run_timeline_button', 1, {
        "pointer-events": "none"
    })
    az.style_layout('calendar_layout', 1, {
        "pointer-events": "none"
    })
    az.animate_element('run_timeline_button', 1, {
        'type': 'spin',
        'speed': 2000
    })
    az.call_every({
        "every": 2000,
        "function": `
                az.call_d3_extra('piechart', 1, {
                    "extra_functions" : piechart_extras,
                    "click_button" : "az.click_element('randomize', 1)"
                })
                az.all_style_layout('calendar_layout_cells', {'background' : 'transparent'})
                az.style_layout('calendar_layout_cells', 13 + index, {'background' : 'hotpink'})
        `
    })
    az.delay_event({
        "delay": 63000,
        "function": `
             az.stop_call_every();
             az.style_button('run_timeline_button', 1, {
                "pointer-events" : "auto"
             })
             az.style_layout('calendar_layout', 1, {
                "pointer-events" : "auto"
             })
             `
    })
}
go_to_circle = {
    "analytics": 2,
    "cluster": 3,
    "graph": 4,
    "scale": 15,
    "controls": 22,
    "label": 31,
    "display": 10
}

function click_circle_pack(use_val) {
    az.call_d3_extra('circlepack', 1, {
        "extra_functions": circlepack_extras,
        "click_circle": "az.click_d3('parent', " + go_to_circle[use_val] + ")"
    })
}

function click_circle_tree(choice) {
    if (choice == 'data_cleaning') {
        az.call_d3_extra('tree_layout', 1, {
            "extra_functions": tree_extras,
            "click_circle": "az.click_d3('node', 6)"
        })
    }
    if (choice == 'centroid_models') {
        az.call_d3_extra('tree_layout', 1, {
            "extra_functions": tree_extras,
            "click_circle": "az.click_d3('node', 5)"
        })
    }
    if (choice == 'model_performance') {
        az.call_d3_extra('tree_layout', 1, {
            "extra_functions": tree_extras,
            "click_circle": "az.click_d3('node', 1)"
        })
    }
}

function click_circle_map(use_val) {
    az.call_d3_extra('map', 1, {
        "extra_functions": map_extras,
        "click_circle": "az.click_d3('click_state', " + states_and_positions[use_val] + ")"
    })
}

function pop_upload() {
    az.add_overlay({
        "this_class": "upload_data_modal_content",
        "center_screen" : true,
        "outside_close" : true
    })
    az.style_overlay('upload_data_modal_content', 1, {
        "width": "auto",
        "height": "auto",
        "border-radius" : "4px",
        "padding" : "20px",
        "background" : "#87adbd"
    })
    /*
    az.add_modal({
        "this_class": "upload_data_modal",
        "content_class": "upload_data_modal_content"
    })
    az.style_modal('upload_data_modal', 1, {
        "width": "auto",
        "height": "auto",
        "background" : "rgb(85,85,85)",
        "color" : "white"
    })
    */
    az.add_text('upload_data_modal_content', 1, {
        "this_class": "upload_text",
        "text": "UPLOAD DATA<br>Use my_data.json from Tutorial<br><br>"
    })
    az.style_word("upload_text", 1, {
        "this_class" : "yellow_word",
        "word" : "my_data.json",
        "color" : "white"
    })
    az.style_word("upload_text", 1, {
        "this_class" : "link_tut_word",
        "word" : "Tutorial",
        "color" : "blue",
        "cursor" : "pointer"
    })
    az.add_event('link_tut_word', 1, {
        "type" : "click",
         "function" : "az.navigate_to('https://towardsdatascience.com/combining-d3-with-kedion-graduating-from-toy-visuals-to-real-applications-92bf7c3cc713#c942', 'new_tab')"
    })
    az.style_text('upload_text', 1, {
        "font-weight": "bold"
    })
    az.add_upload_button('upload_data_modal_content', 1, {
        "this_class": "upload_data_button"
    })
    az.style_upload_button('upload_data_button', 1, {
        "margin-left": "70px"
    })
    az.add_event('upload_data_button', 1, {
        "type": "upload",
        "function": `
    az.call_d3_wrapper('chord_chart', 1, {
        "wrapper_arguments" : chord_wrapper_args,
        "extra_functions" : chord_extras,
        "data_choice" : data['data']
    })
    az.close_modal()
    `
    })
}
all_chord_data = {
    "data_choice_1": [
        [11975, 5871, 8916, 2868],
        [1951, 10048, 2060, 6171],
        [8010, 16145, 8090, 8045],
        [1013, 990, 940, 6907]
    ],
    "data_choice_2": [
        [2000, 5871, 8916, 1868],
        [1951, 1048, 2060, 4171],
        [8010, 1645, 8090, 1045],
        [1013, 990, 1940, 6907]
    ],
    "data_choice_3": [
        [1975, 5871, 1916, 2868],
        [2951, 13048, 4060, 171],
        [3010, 1145, 8090, 4045],
        [113, 2990, 940, 6907]
    ]
}

function switch_client_side(data_choice) {
    az.call_d3_wrapper('chord_chart', 1, {
        "wrapper_arguments": chord_wrapper_args,
        "extra_functions": chord_extras,
        "data_choice": all_chord_data[data_choice]
    })
}

function pop_api_modal() {
    az.add_overlay({
        "this_class": "api_modal_content",
        "center_screen" : true,
        "outside_close" : true
    })
    az.style_overlay('api_modal_content', 1, {
        "width": "auto",
        "height": "auto",
        "border-radius" : "4px",
        "padding" : "20px"
    })
    /*
    az.add_modal({
        "this_class": "api_modal",
        "content_class": "api_modal_content"
    })
    az.style_modal('api_modal', 1, {
        "width": "auto",
        "height": "auto"
    })
    */
    az.add_text('api_modal_content', 1, {
        "this_class": "api_ex_text",
        "text": "CALL REST API ENDPOINT"
    })
    az.style_text('api_ex_text', 1, {
        "font-weight": "bold"
    })
    az.add_code("api_modal_content", 1, {
        "this_class": "azle_d3_code",
        "code": "https://my-json-server.typicode.com/WorldofDataScience/azle_d3/db"
    })
    az.style_code('azle_d3_code', 1, {
        "text-align": "left",
        "width": "auto",
        "padding": "14px"
    })
    az.add_button('api_modal_content', 1, {
        "this_class": "fetch_data_button",
        "text": "FETCH DATA"
    })
    az.style_button('fetch_data_button', 1, {
        "background": "rgb(254, 225, 180)",
        "color": "black",
        "border": "1px solid black",
        "outline" : 0
    })
    az.add_event('fetch_data_button', 1, {
        "type": "click",
        "function": "fetch_chord_data()"
    })
}

function fetch_chord_data() {
    az.animate_element('fetch_data_button', 1, {
        'type': 'spin'
    })
    az.call_api({
        "url": az.listen_for_value('azle_d3_code', 1),
        "parameters": '{"choice" : "fetch_data"}',
        "done": `

        az.call_d3_wrapper('chord_chart', 1, {
        "wrapper_arguments" : chord_wrapper_args,
        "extra_functions" : chord_extras,
        "data_choice" : data['data']
        })

        az.close_overlay('api_modal_content', 1)

        `
    })
}