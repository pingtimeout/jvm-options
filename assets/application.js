/*
 * Copyright (c) Pierre Laporte 2012.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function filterDisplayedOptions() {
    var tokens = $('#search-query').val().toLowerCase().split(/\s+/);
    var nbOptions = 0;
    var nbDisplayedOptions = 0;

    $("div.jvm-option").each(function() {
        nbOptions++;
        $(this).css('display', 'block');
        for (i = 0; i < tokens.length; i++) {
            if ($(this).text().toLowerCase().indexOf(tokens[i]) == -1) {
                $(this).css('display', 'none');
            }
        }
    });

    nbDisplayedOptions = $("div.jvm-option:visible").length;
    $("#options-indicator").html(nbDisplayedOptions + " matching options (total : " + nbOptions + ")");
}

function displayHelp() {
    $("div#help").css('display', 'block');
    $("li#display-help").toggleClass('active');
    $("div#jvm-options").css('display', 'none');
    $("li#display-options").toggleClass('active');
}

function displayOptions() {
    $("div#help").css('display', 'none');
    $("li#display-help").toggleClass('active');
    $("div#jvm-options").css('display', 'block');
    $("li#display-options").toggleClass('active');
}

function setCompactDisplayMode() {
    $("div.jvm-option p:not(p.hide)").toggleClass('hide');
    $("div.jvm-option.well:not(div.well-small)").toggleClass('well-small');
}

function setFullDisplayMode() {
    $("div.jvm-option p.hide").toggleClass('hide');
    $("div.jvm-option.well.well-small").toggleClass('well-small');
}


